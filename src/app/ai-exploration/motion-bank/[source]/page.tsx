import Link from "next/link";
import { ArrowLeft, FileCode2 } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { evidenceSources, getEvidenceSource } from "@/lib/ai-exploration/motion-bank-sources";

import styles from "./source-viewer.module.css";

type SourcePageProps = {
  params: Promise<{ source: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return evidenceSources.map((source) => ({ source: source.slug }));
}

export async function generateMetadata({ params }: SourcePageProps): Promise<Metadata> {
  const { source: slug } = await params;
  const source = getEvidenceSource(slug);

  if (!source) {
    return { title: "Evidence Source | AI Creative Portfolio" };
  }

  return {
    title: `${source.fileName} | Evidence Source`,
    description: `${source.system}의 ${source.fileName} 공개용 발췌 열람 페이지`,
  };
}

export default async function MotionBankSourcePage({ params }: SourcePageProps) {
  const { source: slug } = await params;
  const source = getEvidenceSource(slug);

  if (!source) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link className={styles.backLink} href={`/ai-exploration#${source.returnAnchor}`}>
          <ArrowLeft size={17} />
          Evidence archive
        </Link>
      </header>

      <section className={styles.content}>
        <div className={styles.sourceHeader}>
          <div>
            <span>{source.system}</span>
            <h1>{source.fileName}</h1>
            <p>{source.description}</p>
          </div>
          <dl className={styles.metaList}>
            <div>
              <dt>Archive</dt>
              <dd>{source.period}</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>{source.fileType}</dd>
            </div>
            <div>
              <dt>State</dt>
              <dd>{source.state}</dd>
            </div>
            <div>
              <dt>Disclosure</dt>
              <dd>Curated public excerpt</dd>
            </div>
          </dl>
        </div>

        <div className={styles.snapshotNote}>
          <FileCode2 size={21} />
          <p>
            이 화면은 포트폴리오 공개 범위에 맞춰 만든 핵심 발췌입니다. 원본 파일, 실행 코드, run 데이터, 인증 정보는
            제공하지 않으며 현재 운영 중인 원본의 단일 진실을 대체하지 않습니다.
          </p>
        </div>

        <section aria-label={`${source.fileName} public excerpt`} className={styles.fileFrame}>
          <div className={styles.fileBar}>
            <span>CURATED EXCERPT</span>
            <span>PUBLIC-SAFE STRUCTURE</span>
          </div>
          <pre>{source.excerpt}</pre>
        </section>
      </section>
    </main>
  );
}
