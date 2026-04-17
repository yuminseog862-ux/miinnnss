"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import type { PlaceholderMedia } from "@/data/portfolio";

type DetailMediaGalleryProps = {
  items: PlaceholderMedia[];
  columns?: 3 | 4;
};

export function DetailMediaGallery({ items, columns = 3 }: DetailMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const activeItem =
    activeIndex !== null && items[activeIndex] && items[activeIndex].type !== "video" && items[activeIndex].src
      ? items[activeIndex]
      : null;

  return (
    <>
      <div className={columns === 4 ? "detail-media-grid detail-media-grid-4" : "detail-media-grid"}>
        {items.map((item, index) => {
          const isFeaturedCard = Boolean(item.featured && item.displaySize !== "compact");
          const hasVisual = Boolean(item.src);
          const mediaClassName = [
            isFeaturedCard ? "detail-media-visual detail-media-visual-featured" : "detail-media-visual",
            item.type === "video" ? "detail-media-visual-video" : "",
            item.displaySize === "compact" ? "detail-media-visual-compact" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <article
              key={item.label}
              className={[
                isFeaturedCard ? "detail-media-card detail-media-card-featured" : "detail-media-card",
                hasVisual ? "" : "detail-media-card-linkonly",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {item.src ? (
                item.type === "video" ? (
                  <div className={mediaClassName}>
                    <video
                      className="detail-media-video"
                      controls
                      playsInline
                      preload="metadata"
                      poster={item.poster}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="detail-media-trigger"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Expand ${item.label}`}
                  >
                    <div className={mediaClassName}>
                      <Image
                        src={item.src}
                        alt={item.alt ?? item.label}
                        fill
                        sizes={isFeaturedCard ? "(max-width: 1100px) 100vw, 100vw" : "(max-width: 1100px) 100vw, 33vw"}
                        className="detail-media-image"
                        style={{ objectFit: item.fit ?? "contain" }}
                        priority={item.featured}
                      />
                      <span className="detail-media-zoom-pill">Expand</span>
                    </div>
                  </button>
                )
              ) : null}
              <p className="detail-media-label">{item.label}</p>
              <p className="detail-media-note">{item.note}</p>
              {item.stat || item.href ? (
                <div className="detail-media-meta">
                  {item.stat ? <span className="detail-media-stat">{item.stat}</span> : null}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="detail-media-source-link"
                    >
                      {item.hrefLabel ?? "Open source"}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      {activeItem?.src ? (
        <div
          className="detail-media-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.label}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="detail-media-lightbox-close"
            onClick={() => setActiveIndex(null)}
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
              <p className="detail-media-label">{activeItem.label}</p>
              <p className="detail-media-note">{activeItem.note}</p>
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
