import Link from "next/link";
import { ArrowLeft, FileCode2 } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  evidenceSources,
  getEvidenceDisclosureLabel,
  getEvidenceSource,
} from "@/lib/ai-exploration/motion-bank-sources";

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
    return { title: "공개 근거 | AI Creative Portfolio" };
  }

  return {
    title: `${source.fileName} | 공개 근거`,
    description: `${source.system}의 ${source.fileName} 공개용 발췌 열람 페이지`,
  };
}

export default async function MotionBankSourcePage({ params }: SourcePageProps) {
  const { source: slug } = await params;
  const source = getEvidenceSource(slug);

  if (!source) {
    notFound();
  }

  const disclosureLabel = getEvidenceDisclosureLabel(source);

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link className={styles.backLink} href={`/ai-exploration#${source.returnAnchor}`}>
          <ArrowLeft size={17} />
          포트폴리오로 돌아가기
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
              <dt>기록 시점</dt>
              <dd>{source.period}</dd>
            </div>
            <div>
              <dt>자료 형태</dt>
              <dd>{source.fileType}</dd>
            </div>
            <div>
              <dt>확인 상태</dt>
              <dd>{source.state}</dd>
            </div>
            <div>
              <dt>공개 방식</dt>
              <dd>{disclosureLabel}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.snapshotNote}>
          <FileCode2 size={21} />
          <p>
            {source.disclosureNote ??
              "이 자료는 원본의 핵심 구조를 공개용으로 다시 쓴 요약입니다. 원본 파일, 실행 데이터, 인증 정보는 포함하지 않습니다."}
          </p>
        </div>

        <section aria-label={`${source.fileName} 공개 발췌`} className={styles.fileFrame}>
          <div className={styles.fileBar}>
            <span>{disclosureLabel}</span>
            <span>공개 범위 확인 완료</span>
          </div>
          <pre>{source.excerpt}</pre>
        </section>
      </section>
    </main>
  );
}
