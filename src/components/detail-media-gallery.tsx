"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import type { PlaceholderMedia } from "@/data/portfolio";

type DetailMediaGalleryProps = {
  items: PlaceholderMedia[];
  columns?: 2 | 3 | 4 | 5;
  layout?: "grid" | "stack" | "carousel" | "comparison";
  variant?: "default" | "compact-strip";
  imageClickBehavior?: "lightbox" | "href";
};

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

function inferVideoMime(src?: string) {
  if (!src) {
    return undefined;
  }

  const normalized = src.toLowerCase();

  if (normalized.endsWith(".mov")) {
    return "video/quicktime";
  }

  if (normalized.endsWith(".webm")) {
    return "video/webm";
  }

  return "video/mp4";
}

function DetailVideo({ item, className }: { item: PlaceholderMedia; className: string }) {
  const [showEndedPoster, setShowEndedPoster] = useState(false);
  const shouldShowPoster = item.posterMode === "after-end" ? showEndedPoster : true;
  const sourceType = inferVideoMime(item.src);

  return (
    <video
      className={className}
      controls={item.showControls ?? true}
      playsInline
      preload="metadata"
      poster={shouldShowPoster ? item.poster : undefined}
      autoPlay={item.autoPlay}
      muted={item.muted ?? item.autoPlay ?? false}
      loop={item.loop}
      onPlay={() => {
        if (item.posterMode === "after-end") {
          setShowEndedPoster(false);
        }
      }}
      onEnded={() => {
        if (item.posterMode === "after-end") {
          setShowEndedPoster(true);
        }
      }}
    >
      <source src={item.src} type={sourceType} />
    </video>
  );
}

function getXPostId(embedUrl?: string) {
  return embedUrl?.match(/status\/(\d+)/)?.[1];
}

function getXPostEmbedUrl(embedUrl: string) {
  const postId = getXPostId(embedUrl);

  if (!postId) {
    return undefined;
  }

  const params = new URLSearchParams({
    dnt: "true",
    hide_thread: "true",
    id: postId,
    theme: "dark",
  });

  return `https://platform.twitter.com/embed/Tweet.html?${params.toString()}`;
}

export function DetailMediaGallery({
  items,
  columns = 3,
  layout = "grid",
  variant = "default",
  imageClickBehavior = "lightbox",
}: DetailMediaGalleryProps) {
  const [activeMedia, setActiveMedia] = useState<PlaceholderMedia | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselItems = layout === "comparison" ? items.slice(1) : items;
  const carouselItemCount = carouselItems.length;
  const hasXEmbeds = items.some(
    (item) => item.embedType === "x" && item.embedUrl && !item.src && !getXPostId(item.embedUrl),
  );

  useEffect(() => {
    if (!activeMedia) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMedia(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMedia]);

  useEffect(() => {
    if (layout !== "carousel" && layout !== "comparison") {
      return;
    }

    setCarouselIndex((current) => {
      if (!carouselItemCount) {
        return 0;
      }

      return current >= carouselItemCount ? 0 : current;
    });
  }, [carouselItemCount, layout]);

  useEffect(() => {
    if (!hasXEmbeds) {
      return;
    }

    const renderEmbeds = () => {
      window.twttr?.widgets?.load();
    };
    let attempts = 0;
    const retryRender = window.setInterval(() => {
      attempts += 1;
      renderEmbeds();

      if (window.twttr?.widgets?.load || attempts >= 20) {
        window.clearInterval(retryRender);
      }
    }, 300);

    const scriptSrc = "https://platform.twitter.com/widgets.js";
    const existingScript = document.getElementById("x-widgets-script") as HTMLScriptElement | null;

    if (window.twttr?.widgets?.load) {
      renderEmbeds();
      window.clearInterval(retryRender);
      return;
    }

    if (existingScript) {
      if (!existingScript.src.includes("platform.twitter.com/widgets.js")) {
        existingScript.src = scriptSrc;
      }
      existingScript.addEventListener("load", renderEmbeds, { once: true });
      renderEmbeds();
      return () => {
        window.clearInterval(retryRender);
        existingScript.removeEventListener("load", renderEmbeds);
      };
    }

    const script = document.createElement("script");
    script.id = "x-widgets-script";
    script.src = scriptSrc;
    script.async = true;
    script.charset = "utf-8";
    script.addEventListener("load", renderEmbeds, { once: true });
    document.body.appendChild(script);

    return () => {
      window.clearInterval(retryRender);
      script.removeEventListener("load", renderEmbeds);
    };
  }, [hasXEmbeds, items]);

  const activeItem = activeMedia && activeMedia.type !== "video" && activeMedia.src ? activeMedia : null;

  const renderMeta = (item: PlaceholderMedia) =>
    item.stat || item.href ? (
      <div className="detail-media-meta">
        {item.stat ? <span className="detail-media-stat">{item.stat}</span> : null}
        {item.href ? (
          <a href={item.href} target="_blank" rel="noreferrer" className="detail-media-source-link">
            {item.hrefLabel ?? "Open source"}
          </a>
        ) : null}
      </div>
        ) : null;

  const renderHighlightCards = (item: PlaceholderMedia, className: string) =>
    item.copyHighlights?.length ? (
      <div className={className}>
        {item.copyHighlights.map((card) => (
          <article
            key={`${item.label}-${card.title}`}
            className={`detail-media-row-highlight ${highlightAccentClass(card.accent)}`}
          >
            <p className="detail-media-row-highlight-title">{card.title}</p>
            {!card.items?.length && card.body ? (
              <p className="detail-media-row-highlight-body">{card.body}</p>
            ) : null}
            {card.items?.length ? (
              <ul className="detail-inline-list detail-inline-list-tight detail-media-row-highlight-list">
                {card.items.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    ) : null;

  const highlightAccentClass = (accent?: "aqua" | "orange" | "indigo") => {
    switch (accent) {
      case "aqua":
        return "detail-media-row-highlight-aqua";
      case "orange":
        return "detail-media-row-highlight-orange";
      case "indigo":
      default:
        return "detail-media-row-highlight-indigo";
    }
  };

  const renderStackedVisual = (
    item: PlaceholderMedia,
    className: string,
    sizes: string,
    priority = false,
  ) => {
    if (!item.stackedMedia?.length) {
      return null;
    }

    return (
      <div className={className}>
        <div
          className={[
            "detail-media-stacked-panels",
            item.stackedMediaDirection === "row" ? "detail-media-stacked-panels-row" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={
            item.stackedMediaDirection === "row"
              ? {
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gridTemplateRows: "none",
                }
              : undefined
          }
        >
          {item.stackedMedia.map((panel, panelIndex) => (
            <button
              key={`${item.label}-${panel.src}-${panelIndex}`}
              type="button"
              className="detail-media-stacked-panel detail-media-stacked-panel-button"
              onClick={() =>
                setActiveMedia({
                  label: item.label,
                  note: item.note,
                  src: panel.src,
                  alt: panel.alt,
                  fit: panel.fit ?? item.fit,
                  position: panel.position ?? item.position,
                })
              }
              aria-label={`Expand ${item.label} ${panelIndex + 1}`}
              style={{
                ...(panel.aspectRatio ? { aspectRatio: panel.aspectRatio } : {}),
                ...(panel.insetPadding ? { padding: panel.insetPadding } : {}),
              }}
            >
              <img
                src={panel.src}
                alt={panel.alt}
                className="detail-media-stacked-image"
                style={{
                  objectFit: panel.fit ?? "cover",
                  objectPosition: panel.position ?? "center",
                  transform: panel.scale ? `scale(${panel.scale})` : undefined,
                  transformOrigin: panel.scale ? "center center" : undefined,
                }}
              />
              <span className="detail-media-zoom-pill">Expand</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderGridVisual = (item: PlaceholderMedia, index: number, isFeaturedCard: boolean) => {
    const mediaClassName = [
      isFeaturedCard ? "detail-media-visual detail-media-visual-featured" : "detail-media-visual",
      item.type === "video" ? "detail-media-visual-video" : "",
      item.displaySize === "compact" ? "detail-media-visual-compact" : "",
      item.stackedMedia?.length ? "detail-media-visual-stacked" : "",
      item.stackedMediaDirection === "row" ? "detail-media-visual-stacked-row" : "",
    ]
      .filter(Boolean)
      .join(" ");

    if (item.stackedMedia?.length) {
      return renderStackedVisual(
        item,
        mediaClassName,
        isFeaturedCard ? "(max-width: 1100px) 100vw, 100vw" : "(max-width: 1100px) 100vw, 33vw",
        isFeaturedCard,
      );
    }

    if (item.embedType === "x" && item.embedUrl) {
      const normalizedEmbedUrl = item.embedUrl.replace("https://x.com/", "https://twitter.com/");
      const xPostEmbedUrl = getXPostEmbedUrl(item.embedUrl);

      if (item.src) {
        return (
          <a
            href={item.href ?? item.embedUrl}
            target="_blank"
            rel="noreferrer"
            className="crossangle-x-post-card detail-x-post-card"
            aria-label={`${item.label} X 원문 보기`}
          >
            <div className="crossangle-x-post-inner">
              <header className="crossangle-x-post-head">
                <span className="crossangle-x-post-avatar">
                  <Image src="/aheya/logo.webp" alt="" fill sizes="42px" />
                </span>
                <span className="crossangle-x-post-profile">
                  <strong>
                    Minnnnns
                    <span aria-hidden="true">✓</span>
                  </strong>
                  <small>@minnns_aheya · Follow</small>
                </span>
                <span className="crossangle-x-post-mark" aria-hidden="true">
                  𝕏
                </span>
              </header>

              <p className="crossangle-x-post-body">
                {item.embedText || item.note}
              </p>

              <div className="crossangle-x-post-media">
                <Image
                  src={item.src}
                  alt={item.alt ?? item.label}
                  fill
                  sizes="(max-width: 1100px) 50vw, 18vw"
                  style={{ objectFit: item.fit ?? "cover", objectPosition: item.position }}
                />
                <span className="crossangle-x-post-play" aria-hidden="true" />
              </div>
            </div>
          </a>
        );
      }

      if (xPostEmbedUrl) {
        return (
          <div className="detail-media-x-embed-shell detail-media-x-embed-shell-frame">
            <iframe
              className="detail-media-x-iframe"
              title={`${item.label} X 포스트`}
              src={xPostEmbedUrl}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        );
      }

      return (
        <div className="detail-media-x-embed-shell">
          <blockquote
            className="twitter-tweet"
            data-theme="dark"
            data-dnt="true"
            data-conversation="none"
            data-cards="visible"
            data-align="center"
          >
            {item.embedText ? <p>{item.embedText}</p> : null}
            <a href={normalizedEmbedUrl}>X 포스트 원문 보기</a>
          </blockquote>
        </div>
      );
    }

    if (item.src) {
      if (item.type === "video") {
        return (
          <div className={mediaClassName}>
            <DetailVideo item={item} className="detail-media-video" />
          </div>
        );
      }

      const visual = (
        <div className={mediaClassName}>
          <Image
            src={item.src}
            alt={item.alt ?? item.label}
            fill
            sizes={isFeaturedCard ? "(max-width: 1100px) 100vw, 100vw" : "(max-width: 1100px) 100vw, 33vw"}
            className="detail-media-image"
            style={{
              objectFit: item.fit ?? "contain",
              objectPosition: item.position ?? "center",
            }}
            priority={item.featured}
          />
          <span className="detail-media-zoom-pill">{imageClickBehavior === "href" && item.href ? "Open" : "Expand"}</span>
        </div>
      );

      if (imageClickBehavior === "href" && item.href) {
        return (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="detail-media-trigger detail-media-link-trigger"
            aria-label={`${item.label} 링크 열기`}
          >
            {visual}
          </a>
        );
      }

      return (
        <button
          type="button"
          className="detail-media-trigger"
          onClick={() => setActiveMedia(item)}
          aria-label={`Expand ${item.label}`}
        >
          {visual}
        </button>
      );
    }

    if (item.href) {
      const isPdfLink = item.href.toLowerCase().endsWith(".pdf");

      return (
        <a href={item.href} target="_blank" rel="noreferrer" className="detail-media-file-link">
          <div className="detail-media-file-block">
            <span className="detail-media-file-kind">{isPdfLink ? "PDF" : "LINK"}</span>
            <strong className="detail-media-file-title">{item.label}</strong>
          </div>
        </a>
      );
    }

    return null;
  };

  const renderRowVisual = (item: PlaceholderMedia, index: number) => {
    if (item.src) {
      if (item.type === "video") {
        return (
          <div className="detail-media-row-visual detail-media-row-visual-video">
            <DetailVideo item={item} className="detail-media-video" />
          </div>
        );
      }

      return (
        <button
          type="button"
          className="detail-media-row-trigger"
          onClick={() => setActiveMedia(item)}
          aria-label={`Expand ${item.label}`}
        >
          <div className="detail-media-row-visual">
            <Image
              src={item.src}
              alt={item.alt ?? item.label}
              fill
              sizes="(max-width: 1100px) 100vw, 48vw"
              className="detail-media-image"
              style={{
                objectFit: item.fit ?? "contain",
                objectPosition: item.position ?? "center",
              }}
              priority={index === 0}
            />
            <span className="detail-media-zoom-pill">Expand</span>
          </div>
        </button>
      );
    }

    if (item.href) {
      const isPdfLink = item.href.toLowerCase().endsWith(".pdf");

      return (
        <a href={item.href} target="_blank" rel="noreferrer" className="detail-media-row-file-link">
          <div className="detail-media-file-block detail-media-row-file-block">
            <span className="detail-media-file-kind">{isPdfLink ? "PDF" : "LINK"}</span>
            <strong className="detail-media-file-title">{item.label}</strong>
          </div>
        </a>
      );
    }

    return null;
  };

  const renderRowCard = (item: PlaceholderMedia, index: number) => (
    <article
      key={`${item.label}-${index}`}
      className={["detail-media-row", item.hideText ? "detail-media-row-centerpiece" : ""].filter(Boolean).join(" ")}
    >
      <div className="detail-media-row-visual-shell">
        {renderRowVisual(item, index)}
      </div>
      {!item.hideText ? (
        <div className="detail-media-row-copy">
          <div className="detail-media-row-top">
            <span className="detail-media-row-index">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="detail-media-row-title">{item.label}</h3>
          <p className="detail-media-row-note">{item.note}</p>
          {renderHighlightCards(item, "detail-media-row-highlight-grid")}
          {item.copyMedia ? (
            <div className="detail-media-row-copy-support">
              <Image
                src={item.copyMedia.src}
                alt={item.copyMedia.alt}
                fill
                sizes="(max-width: 1100px) 100vw, 24vw"
                className="detail-media-image"
                style={{
                  objectFit: item.copyMedia.fit ?? "contain",
                  objectPosition: item.copyMedia.position ?? "center",
                }}
              />
            </div>
          ) : null}
          {renderMeta(item)}
        </div>
      ) : (
        <div className="detail-media-row-copy detail-media-row-copy-empty" aria-hidden="true" />
      )}
    </article>
  );

  const renderCarouselVisual = (item: PlaceholderMedia, index: number) => {
    if (item.stackedMedia?.length) {
      return renderStackedVisual(
        item,
        [
          "detail-media-carousel-visual",
          "detail-media-visual-stacked",
          item.stackedMediaDirection === "row" ? "detail-media-visual-stacked-row" : "",
        ]
          .filter(Boolean)
          .join(" "),
        "(max-width: 1100px) 100vw, 72vw",
        index === 0,
      );
    }

    if (item.src) {
      if (item.type === "video") {
        return (
          <div className="detail-media-carousel-visual detail-media-carousel-visual-video">
            <DetailVideo item={item} className="detail-media-video" />
          </div>
        );
      }

      return (
        <button
          type="button"
          className="detail-media-carousel-trigger"
          onClick={() => setActiveMedia(item)}
          aria-label={`Expand ${item.label}`}
        >
          <div className="detail-media-carousel-visual">
            <Image
              src={item.src}
              alt={item.alt ?? item.label}
              fill
              sizes="(max-width: 1100px) 100vw, 72vw"
              className="detail-media-image"
              style={{ objectFit: item.fit ?? "contain" }}
              priority={index === 0}
            />
            <span className="detail-media-zoom-pill">Expand</span>
          </div>
        </button>
      );
    }

    if (item.href) {
      const isPdfLink = item.href.toLowerCase().endsWith(".pdf");

      return (
        <a href={item.href} target="_blank" rel="noreferrer" className="detail-media-carousel-file-link">
          <div className="detail-media-file-block detail-media-carousel-file-block">
            <span className="detail-media-file-kind">{isPdfLink ? "PDF" : "LINK"}</span>
            <strong className="detail-media-file-title">{item.label}</strong>
          </div>
        </a>
      );
    }

    return null;
  };

  const renderCarouselCard = (item: PlaceholderMedia, index: number) => (
    <article key={`${item.label}-${index}`} className="detail-media-carousel-card">
      <div className="detail-media-carousel-visual-shell">
        {carouselItemCount > 1 ? (
          <button
            type="button"
            className="detail-media-carousel-nav detail-media-carousel-nav-prev"
            onClick={() => setCarouselIndex((current) => (current === 0 ? carouselItemCount - 1 : current - 1))}
            aria-label="이전 캡처"
          >
            {"<"}
          </button>
        ) : null}

        {renderCarouselVisual(item, index)}

        {carouselItemCount > 1 ? (
          <button
            type="button"
            className="detail-media-carousel-nav detail-media-carousel-nav-next"
            onClick={() => setCarouselIndex((current) => (current === carouselItemCount - 1 ? 0 : current + 1))}
            aria-label="다음 캡처"
          >
            {">"}
          </button>
        ) : null}
      </div>

      <div className="detail-media-carousel-copy">
        <div className="detail-media-carousel-copy-top">
          <span className="detail-media-carousel-count">
            {carouselIndex + 1} / {carouselItemCount}
          </span>
          <span className="detail-media-row-index">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="detail-media-carousel-title">{item.label}</h3>
        <p className="detail-media-carousel-note">{item.note}</p>
        {renderHighlightCards(item, "detail-media-carousel-highlight-grid")}
        {renderMeta(item)}
      </div>
    </article>
  );

  const renderComparisonVisual = (item: PlaceholderMedia, index: number) => {
    if (item.stackedMedia?.length) {
      return renderStackedVisual(
        item,
        [
          "detail-media-comparison-visual",
          "detail-media-visual-stacked",
          item.stackedMediaDirection === "row" ? "detail-media-visual-stacked-row" : "",
        ]
          .filter(Boolean)
          .join(" "),
        "(max-width: 1100px) 100vw, 46vw",
        index === 0,
      );
    }

    if (item.src) {
      if (item.type === "video") {
        return (
          <div className="detail-media-comparison-visual detail-media-comparison-visual-video">
            <DetailVideo item={item} className="detail-media-video" />
          </div>
        );
      }

      return (
        <button
          type="button"
          className="detail-media-comparison-trigger"
          onClick={() => setActiveMedia(item)}
          aria-label={`Expand ${item.label}`}
        >
          <div className="detail-media-comparison-visual">
            <Image
              src={item.src}
              alt={item.alt ?? item.label}
              fill
              sizes="(max-width: 1100px) 100vw, 46vw"
              className="detail-media-image"
              style={{ objectFit: item.fit ?? "contain" }}
              priority={index === 0}
            />
            <span className="detail-media-zoom-pill">Expand</span>
          </div>
        </button>
      );
    }

    if (item.href) {
      const isPdfLink = item.href.toLowerCase().endsWith(".pdf");

      return (
        <a href={item.href} target="_blank" rel="noreferrer" className="detail-media-comparison-file-link">
          <div className="detail-media-file-block detail-media-comparison-file-block">
            <span className="detail-media-file-kind">{isPdfLink ? "PDF" : "LINK"}</span>
            <strong className="detail-media-file-title">{item.label}</strong>
          </div>
        </a>
      );
    }

    return null;
  };

  const renderComparisonPanel = (
    item: PlaceholderMedia,
    index: number,
    position: "fixed" | "carousel",
    countLabel?: string,
  ) => (
    <article
      key={`${position}-${item.label}-${index}`}
      className={[
        "detail-media-comparison-panel",
        position === "fixed" ? "detail-media-comparison-panel-fixed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="detail-media-comparison-visual-shell">
        {position === "carousel" && carouselItemCount > 1 ? (
          <button
            type="button"
            className="detail-media-carousel-nav detail-media-carousel-nav-prev"
            onClick={() => setCarouselIndex((current) => (current === 0 ? carouselItemCount - 1 : current - 1))}
            aria-label="이전 캡처"
          >
            {"<"}
          </button>
        ) : null}

        {renderComparisonVisual(item, index)}

        {position === "carousel" && carouselItemCount > 1 ? (
          <button
            type="button"
            className="detail-media-carousel-nav detail-media-carousel-nav-next"
            onClick={() => setCarouselIndex((current) => (current === carouselItemCount - 1 ? 0 : current + 1))}
            aria-label="다음 캡처"
          >
            {">"}
          </button>
        ) : null}
      </div>

      <div className="detail-media-comparison-copy">
        <div className="detail-media-comparison-copy-top">
          <span className="detail-media-carousel-count">{countLabel ?? `${carouselIndex + 1} / ${carouselItemCount}`}</span>
        </div>
        <h3 className="detail-media-comparison-title">{item.label}</h3>
        <p className="detail-media-comparison-note">{item.note}</p>
        {renderHighlightCards(item, "detail-media-carousel-highlight-grid")}
        {renderMeta(item)}
      </div>
    </article>
  );

  return (
    <>
      {layout === "comparison" && items.length ? (
        <div className="detail-media-comparison">
          {renderComparisonPanel(items[0], 0, "fixed", "현재 흐름")}
          {carouselItems[carouselIndex]
            ? renderComparisonPanel(carouselItems[carouselIndex], carouselIndex + 1, "carousel")
            : null}
        </div>
      ) : layout === "carousel" && carouselItems.length ? (
        <div className="detail-media-carousel">{renderCarouselCard(carouselItems[carouselIndex], carouselIndex)}</div>
      ) : layout === "stack" ? (
        <div className="detail-media-stack-list">{items.map((item, index) => renderRowCard(item, index))}</div>
      ) : (
        <div
          className={[
            "detail-media-grid",
            columns === 2 ? "detail-media-grid-2" : "",
            columns === 4 ? "detail-media-grid-4" : "",
            columns === 5 ? "detail-media-grid-5" : "",
            variant === "compact-strip" ? "detail-media-grid-compact-strip" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, index) => {
            const isFeaturedCard = Boolean(
              variant !== "compact-strip" && item.featured && item.displaySize !== "compact",
            );
            const hasVisual = Boolean(item.src || item.embedType === "x");

            return (
              <article
                key={item.label}
                className={[
                  isFeaturedCard ? "detail-media-card detail-media-card-featured" : "detail-media-card",
                  variant === "compact-strip" ? "detail-media-card-compact-strip" : "",
                  item.gridSpan === 2 ? "detail-media-card-span-2" : "",
                  item.gridSpan === 4 ? "detail-media-card-span-4" : "",
                  hasVisual ? "" : "detail-media-card-linkonly",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {renderGridVisual(item, index, isFeaturedCard)}
                {!item.hideText ? <p className="detail-media-label">{item.label}</p> : null}
                {!item.hideText ? <p className="detail-media-note">{item.note}</p> : null}
                {!item.hideText ? renderMeta(item) : null}
                {renderHighlightCards(item, "detail-media-row-highlight-grid")}
              </article>
            );
          })}
        </div>
      )}

      {activeItem?.src ? (
        <div
          className="detail-media-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.label}
          onClick={() => setActiveMedia(null)}
        >
          <button
            type="button"
            className="detail-media-lightbox-close"
            onClick={() => setActiveMedia(null)}
            aria-label="Close expanded image"
          >
            Close
          </button>

          <div className="detail-media-lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <div className="detail-media-lightbox-visual">
              <Image
                src={activeItem.src}
                alt={activeItem.alt ?? activeItem.label}
                fill
                sizes="100vw"
                className="detail-media-lightbox-image"
                style={{ objectFit: activeItem.fit ?? "contain" }}
                priority
              />
            </div>
            <div className="detail-media-lightbox-copy">
              {!activeItem.hideText ? <p className="detail-media-label">{activeItem.label}</p> : null}
              {!activeItem.hideText ? <p className="detail-media-note">{activeItem.note}</p> : null}
              {activeItem.stat || activeItem.href ? (
                <div className="detail-media-meta">
                  {activeItem.stat ? <span className="detail-media-stat">{activeItem.stat}</span> : null}
                  {activeItem.href ? (
                    <a
                      href={activeItem.href}
                      target="_blank"
                      rel="noreferrer"
                      className="detail-media-source-link"
                    >
                      {activeItem.hrefLabel ?? "Open source"}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
