import Link from "next/link";
import { ArrowLeft, ArrowRight, FileCode2, ShieldAlert } from "lucide-react";
import { notFound } from "next/navigation";

import {
  getInternalEvidenceArtifacts,
  internalEvidenceAreas,
  internalEvidenceArtifacts,
  internalHarnessStages,
} from "@/lib/ai-exploration/internal-evidence";

import styles from "./internal-evidence.module.css";

export const dynamic = "force-dynamic";

function LocalOnlyGuard() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return null;
}

function ArtifactLinks({ ids }: { ids: readonly string[] }) {
  const artifacts = getInternalEvidenceArtifacts(ids);

  return (
    <ul className={styles.artifactLinks}>
      {artifacts.map((artifact) => (
        <li key={artifact.id}>
          <Link href={`/ai-exploration/internal/artifacts/${artifact.id}`}>
            <span>{artifact.stage}</span>
            <strong>{artifact.title}</strong>
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function InternalEvidenceRoomPage() {
  return (
    <main className={styles.page}>
      <LocalOnlyGuard />

      <header className={styles.topbar}>
        <Link className={styles.backLink} href="/ai-exploration">
          <ArrowLeft size={17} />
          Public summary
        </Link>
        <span>LOCAL ONLY / NOT DEPLOYED</span>
      </header>

      <section className={styles.hero}>
        <span className={styles.kicker}>AI EXPERIENCE / INTERNAL EVIDENCE ROOM</span>
        <h1>질문은 결과가 아니라,<br />어떤 판단을 남겼는가입니다.</h1>
        <p>
          이 화면은 로컬 개발 환경에서만 열립니다. 공개용 포트폴리오의 선별된 발췌와 달리, 실제 production record,
          catalog, 작업표면 구현, service code를 단계별로 확인하기 위한 내부 검토용 증거실입니다.
        </p>
        <div className={styles.scopeNote}>
          <ShieldAlert aria-hidden="true" size={20} />
          <p>비밀값, 인증 정보, 지갑 시드, 환경 파일, 개인 식별 데이터는 포함하지 않습니다. 파일 원문은 허용 목록에 있는 자료만 열립니다.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>01</span>
          <div>
            <small>Shared creative harness</small>
            <h2>Pulso와 Ink는 같은 하네스에서 무엇을 남겼나?</h2>
            <p>두 프로젝트의 상태를 같다고 보지 않습니다. Pulso는 현재 남아 있는 actual run record를, Ink는 catalog와 packaged-output register를 기준으로 분리해서 읽습니다.</p>
          </div>
        </div>

        <div className={styles.harnessGrid}>
          <div className={styles.harnessHeader}>
            <span>Stage</span>
            <span>Pulso / actual run records</span>
            <span>Ink / catalog & packaged record</span>
          </div>
          {internalHarnessStages.map((stage) => (
            <article className={styles.harnessRow} key={stage.index}>
              <div className={styles.stageCopy}>
                <span>{stage.index}</span>
                <h3>{stage.title}</h3>
                <p>{stage.detail}</p>
              </div>
              <ArtifactLinks ids={stage.pulso} />
              <ArtifactLinks ids={stage.ink} />
            </article>
          ))}
        </div>

        <div className={styles.caveat}>
          <FileCode2 aria-hidden="true" size={21} />
          <p>INK의 catalog는 실제 production run과 final master의 경로·계보를 보존합니다. 다만 catalog가 참조하는 일부 원본 run 문서는 현재 워크스페이스에 존재하지 않아, 이 증거실에서는 없는 파일을 있는 것처럼 열거나 그 전문을 재구성하지 않습니다.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>02</span>
          <div>
            <small>Decision surface & service rail</small>
            <h2>하네스 바깥에서, 판단·실행·기록은 어떻게 연결했나?</h2>
            <p>Workbench는 콘텐츠 production record를 읽고 선택·보류·handoff 하기 위해 만든 로컬 작업표면입니다. AHEYA는 AI-assisted 서비스 설계, 실행, 평가, 신뢰 기록을 개발 수준까지 탐구한 별도 실험입니다.</p>
          </div>
        </div>

        <div className={styles.areaGrid}>
          {internalEvidenceAreas.slice(2).map((area) => {
            const artifacts = internalEvidenceArtifacts.filter((artifact) => artifact.area === area);

            return (
              <section className={styles.areaSection} key={area}>
                <div>
                  <span>{area === "Workbench" ? "LOCAL DECISION SURFACE" : "SERVICE / TRUST EXPLORATION"}</span>
                  <h3>{area}</h3>
                </div>
                <ArtifactLinks ids={artifacts.map((artifact) => artifact.id)} />
              </section>
            );
          })}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Internal review surface. 공개 전환 시에는 source별 공개 범위와 문장 단위의 사실성 검토가 별도로 필요합니다.</p>
      </footer>
    </main>
  );
}
