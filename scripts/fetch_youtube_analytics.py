#!/usr/bin/env python3
"""
Fetch YouTube Analytics (country, average view duration / completion proxy)
for the Loom channel via OAuth.

Usage:
  python3 scripts/fetch_youtube_analytics.py

Credentials (first match wins):
  1) YOUTUBE_OAUTH_CLIENT_SECRETS / GOOGLE_OAUTH_CLIENT_SECRETS env path
  2) ./secrets/youtube-client-secret.json   ← preferred (repo secrets/, gitignored)
  3) ~/Documents/*client_secret*.json (legacy fallback)

Token is stored at:
  .tmp/content-learning-metrics/youtube-oauth-token.json
  (gitignored via .tmp/)

Preferred secrets layout (gitignored portfolio/secrets/):
  youtube-oauth-desktop-YYYY-MM-DD.json      # no client_id field
  youtube-oauth-desktop-YYYY-MM-DD.client-id # client_id only (sidecar)
Runtime merges sidecar into .tmp/.../youtube-oauth-client.runtime.json (local only).

Opens a browser consent window when no valid token exists.
"""

from __future__ import annotations

import json
import os
import sys
from datetime import date, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / ".tmp" / "content-learning-metrics"
TOKEN_PATH = OUT_DIR / "youtube-oauth-token.json"
RESULT_PATH = OUT_DIR / "youtube-analytics-admin.json"

SCOPES = [
    "https://www.googleapis.com/auth/yt-analytics.readonly",
    "https://www.googleapis.com/auth/youtube.readonly",
]

# Loom public channel id (from earlier public metadata)
DEFAULT_CHANNEL_ID = "UCH_8Zw7ggdGO8bSor4_B-ig"

# Posts we care about for portfolio remeasure
TARGET_VIDEO_IDS = [
    "xNfAkfhipSE",
    "br8NKQIHjOQ",
    "rxwn61IROQc",
    "4-18kkZFh18",
    "l2cJP7Q9I8I",
    "SDRlYNohEiE",
    "j3XvEYwlApE",
    "TyONE0lKI2s",
    "vvw8DdTrFtA",
    "DUyCAFHZ7X0",
    "0vV4CXL3_Qk",
]


def find_client_secrets() -> Path:
    env_keys = [
        "YOUTUBE_OAUTH_CLIENT_SECRETS",
        "GOOGLE_OAUTH_CLIENT_SECRETS",
        "GOOGLE_CLIENT_SECRETS",
    ]
    for key in env_keys:
        val = os.environ.get(key)
        if val and Path(val).expanduser().is_file():
            return Path(val).expanduser()

    secrets_dir = ROOT / "secrets"
    if secrets_dir.is_dir():
        # Preferred: dated desktop files (no client_id in filename)
        dated = sorted(
            (
                p
                for p in secrets_dir.glob("youtube-oauth-desktop-*.json")
                if "backup" not in p.name.lower() and "legacy" not in p.name.lower()
            ),
            reverse=True,
        )
        if dated:
            return dated[0]

        for name in (
            "youtube-client-secret.json",
            "google-oauth-client.json",
            "client_secret.json",
        ):
            candidate = secrets_dir / name
            if candidate.is_file():
                return candidate

        for path in sorted(secrets_dir.glob("client_secret*.json")):
            if "backup" in path.name.lower():
                continue
            return path

    raise FileNotFoundError(
        "No OAuth client secrets under portfolio/secrets/.\n"
        "Preferred: youtube-oauth-desktop-YYYY-MM-DD.json\n"
        "Sidecar (client_id only): youtube-oauth-desktop-YYYY-MM-DD.client-id\n"
        "Or set YOUTUBE_OAUTH_CLIENT_SECRETS."
    )


def materialize_client_secrets_for_oauth(client_secrets: Path) -> Path:
    """Merge optional .client-id sidecar into a runtime Google-format secrets file."""
    raw = json.loads(client_secrets.read_text())
    kind = "installed" if "installed" in raw else "web" if "web" in raw else None
    if not kind:
        return client_secrets

    inner = dict(raw[kind])
    if not inner.get("client_id"):
        alt = client_secrets.with_name(client_secrets.stem + ".client-id")
        client_id = alt.read_text().strip() if alt.is_file() else ""
        if not client_id:
            client_id = (
                os.environ.get("YOUTUBE_OAUTH_CLIENT_ID")
                or os.environ.get("GOOGLE_OAUTH_CLIENT_ID")
                or ""
            ).strip()
        if not client_id:
            raise FileNotFoundError(
                f"client_id missing from {client_secrets.name}. "
                f"Add sidecar {client_secrets.stem}.client-id or set YOUTUBE_OAUTH_CLIENT_ID."
            )
        inner["client_id"] = client_id

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    material = OUT_DIR / "youtube-oauth-client.runtime.json"
    material.write_text(json.dumps({kind: inner}, indent=2) + "\n")
    return material


def load_credentials(client_secrets: Path):
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow

    creds = None
    if TOKEN_PATH.is_file():
        creds = Credentials.from_authorized_user_file(str(TOKEN_PATH), SCOPES)

    if creds and creds.valid:
        return creds

    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
        TOKEN_PATH.write_text(creds.to_json())
        return creds

    # Prepare flow. Web clients need localhost in redirect URIs.
    oauth_secrets = materialize_client_secrets_for_oauth(client_secrets)
    raw = json.loads(oauth_secrets.read_text())
    client_kind = "web" if "web" in raw else "installed" if "installed" in raw else "unknown"
    inner = raw.get("web") or raw.get("installed") or {}
    registered = inner.get("redirect_uris") or []
    project_id = inner.get("project_id") or "(unknown project)"
    local_redirect = "http://localhost:8765/"
    print(f"[oauth] client_secrets={client_secrets.name}")
    print(f"[oauth] client_kind={client_kind}")
    print(f"[oauth] project_id={project_id}")
    print(f"[oauth] registered_redirect_uris={registered}")
    print(f"[oauth] scopes={SCOPES}")

    # Desktop/installed clients typically allow http://localhost with a free port.
    # Web clients need an exact registered redirect like http://localhost:8765/.
    if client_kind == "web":
        if local_redirect.rstrip("/") not in {u.rstrip("/") for u in registered} and local_redirect not in registered:
            print()
            print("=" * 72)
            print("BLOCKER: web OAuth 클라이언트에 로컬 리다이렉트가 없습니다.")
            print(f"  project={project_id}")
            print(f"  add redirect URI: {local_redirect}")
            print(f"  console: https://console.cloud.google.com/apis/credentials?project={project_id}")
            print("=" * 72)
            print()
    else:
        print(f"[oauth] desktop/installed client — loopback redirect OK ({registered or 'default'})")

    print("[oauth] Opening browser consent window…")
    print("Enable if needed: YouTube Data API v3 + YouTube Analytics API")
    print(f"  https://console.cloud.google.com/apis/library?project={project_id}")
    print("Sign in with the Google account that owns the Loom channel.")

    flow = InstalledAppFlow.from_client_secrets_file(str(oauth_secrets), SCOPES)
    # Desktop: free port. Web: fixed 8765 when pre-registered.
    bind_port = 8765 if client_kind == "web" else 0
    try:
        creds = flow.run_local_server(
            port=bind_port,
            prompt="consent",
            authorization_prompt_message="Please visit this URL to authorize: {url}",
            success_message="YouTube Analytics authorization complete. You can close this tab.",
            open_browser=True,
        )
    except Exception:
        print(
            "\n[oauth] Consent failed.\n"
            "- Desktop client: ensure YouTube APIs enabled + test user added\n"
            f"- Web client: register {local_redirect} on the OAuth client\n"
            "- Use the Loom channel owner Google account\n",
            file=sys.stderr,
        )
        raise
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    TOKEN_PATH.write_text(creds.to_json())
    print(f"[oauth] token saved → {TOKEN_PATH}")
    return creds


def build_services(creds):
    from googleapiclient.discovery import build

    youtube = build("youtube", "v3", credentials=creds, cache_discovery=False)
    analytics = build("youtubeAnalytics", "v2", credentials=creds, cache_discovery=False)
    return youtube, analytics


def mine_channel_id(youtube) -> str:
    resp = youtube.channels().list(part="id,snippet,statistics", mine=True).execute()
    items = resp.get("items") or []
    if not items:
        print("[warn] No channel on this Google account; falling back to Loom public id")
        return DEFAULT_CHANNEL_ID
    ch = items[0]
    print(
        f"[channel] id={ch['id']} title={ch['snippet'].get('title')} "
        f"subs={ch['statistics'].get('subscriberCount')} views={ch['statistics'].get('viewCount')}"
    )
    return ch["id"]


def run_report(analytics, **kwargs):
    return analytics.reports().query(**kwargs).execute()


def fetch_channel_country(analytics, channel_id: str, start: str, end: str):
    try:
        return run_report(
            analytics,
            ids=f"channel=={channel_id}",
            startDate=start,
            endDate=end,
            metrics="views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage",
            dimensions="country",
            sort="-views",
            maxResults=15,
        )
    except Exception as exc:  # noqa: BLE001
        return {"error": str(exc)}


def fetch_channel_totals(analytics, channel_id: str, start: str, end: str):
    try:
        return run_report(
            analytics,
            ids=f"channel=={channel_id}",
            startDate=start,
            endDate=end,
            metrics="views,likes,comments,shares,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained",
        )
    except Exception as exc:  # noqa: BLE001
        return {"error": str(exc)}


def fetch_video_metrics(analytics, channel_id: str, video_id: str, start: str, end: str):
    try:
        return run_report(
            analytics,
            ids=f"channel=={channel_id}",
            startDate=start,
            endDate=end,
            metrics="views,likes,comments,shares,estimatedMinutesWatched,averageViewDuration,averageViewPercentage",
            dimensions="video",
            filters=f"video=={video_id}",
            maxResults=1,
        )
    except Exception as exc:  # noqa: BLE001
        return {"error": str(exc), "videoId": video_id}


def fetch_video_country(analytics, channel_id: str, video_id: str, start: str, end: str):
    try:
        return run_report(
            analytics,
            ids=f"channel=={channel_id}",
            startDate=start,
            endDate=end,
            metrics="views,averageViewDuration,averageViewPercentage",
            dimensions="country",
            filters=f"video=={video_id}",
            sort="-views",
            maxResults=10,
        )
    except Exception as exc:  # noqa: BLE001
        return {"error": str(exc), "videoId": video_id}


def rows_to_dicts(report: dict) -> list[dict]:
    if not report or "error" in report:
        return []
    headers = [h["name"] for h in report.get("columnHeaders", [])]
    out = []
    for row in report.get("rows") or []:
        out.append(dict(zip(headers, row)))
    return out


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    try:
        client_secrets = find_client_secrets()
    except FileNotFoundError as exc:
        print(exc, file=sys.stderr)
        return 2

    try:
        creds = load_credentials(client_secrets)
    except Exception as exc:  # noqa: BLE001
        print(f"[oauth] FAILED: {exc}", file=sys.stderr)
        print(
            "\nLikely fixes:\n"
            "1) Google Cloud Console → enable YouTube Data API v3 + YouTube Analytics API\n"
            "2) OAuth consent screen → add test user (your Google account)\n"
            "3) Credentials → this client → Authorized redirect URIs include http://localhost:8765/\n"
            "4) Prefer a Desktop OAuth client JSON for local scripts\n",
            file=sys.stderr,
        )
        return 1

    youtube, analytics = build_services(creds)
    channel_id = mine_channel_id(youtube)

    end = date.today()
    start = end - timedelta(days=56)  # ~8 weeks covers June–Aug window
    start_s, end_s = start.isoformat(), end.isoformat()
    print(f"[range] {start_s} → {end_s}")

    channel_totals = fetch_channel_totals(analytics, channel_id, start_s, end_s)
    channel_country = fetch_channel_country(analytics, channel_id, start_s, end_s)

    video_reports = {}
    for vid in TARGET_VIDEO_IDS:
        print(f"[video] {vid}")
        video_reports[vid] = {
            "metrics": fetch_video_metrics(analytics, channel_id, vid, start_s, end_s),
            "byCountry": fetch_video_country(analytics, channel_id, vid, start_s, end_s),
        }

    payload = {
        "measuredAt": date.today().isoformat(),
        "source": "YouTube Analytics API v2 + YouTube Data API v3 (OAuth)",
        "channelId": channel_id,
        "range": {"start": start_s, "end": end_s},
        "channelTotals": channel_totals,
        "channelTotalsRows": rows_to_dicts(channel_totals if isinstance(channel_totals, dict) else {}),
        "channelCountry": channel_country,
        "channelCountryRows": rows_to_dicts(channel_country if isinstance(channel_country, dict) else {}),
        "videos": video_reports,
    }
    RESULT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2))
    print(f"[done] wrote {RESULT_PATH}")

    # Human summary
    if payload["channelCountryRows"]:
        print("\nTop countries (channel window):")
        for row in payload["channelCountryRows"][:8]:
            print(
                f"  {row.get('country')}: views={row.get('views')} "
                f"avgViewDuration={row.get('averageViewDuration')}s "
                f"avgViewPercentage={row.get('averageViewPercentage')}%"
            )
    elif isinstance(channel_country, dict) and channel_country.get("error"):
        print("\n[country report error]", channel_country["error"])

    if payload["channelTotalsRows"]:
        print("\nChannel totals:", payload["channelTotalsRows"][0])
    elif isinstance(channel_totals, dict) and channel_totals.get("error"):
        print("\n[totals report error]", channel_totals["error"])

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
