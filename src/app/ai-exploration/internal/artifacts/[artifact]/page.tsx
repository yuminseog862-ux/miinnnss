import Link from "next/link";
import { ArrowLeft, FileCode2, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";

import { getInternalEvidenceArtifact, readInternalEvidenceArtifact } from "@/lib/ai-exploration/internal-evidence";

import styles from "../../internal-evidence.module.css";

type ArtifactPageProps = {
  params: Promise<{ artifact: string }>;
};

export const dynamic = "force-dynamic";

export default async function InternalArtifactPage({ params }: ArtifactPageProps) {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const { artifact: id } = await params;
  const artifact = getInternalEvidenceArtifact(id);

  if (!artifact) {
    notFound();
  }

  let source: Awaited<ReturnType<typeof readInternalEvidenceArtifact>>;

  try {
    source = await readInternalEvidenceArtifact(artifact);
  } catch {
    notFound();
  }

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link className={styles.backLink} href="/ai-exploration/internal">
          <ArrowLeft size={17} />
          Internal evidence room
        </Link>
        <span>LOCAL ONLY / FULL SOURCE</span>
      </header>

      <section className={styles.sourceContent}>
        <div className={styles.sourceHeader}>
          <div>
            <span>{artifact.area} / {artifact.stage}</span>
            <h1>{artifact.title}</h1>
            <p>{artifact.supports}</p>
          </div>
          <dl className={styles.sourceMeta}>
            <div>
              <dt>File</dt>
              <dd>{artifact.fileName}</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>{artifact.format}</dd>
            </div>
            <div>
              <dt>Lines</dt>
              <dd>{source.lineCount.toLocaleString("ko-KR")}</dd>
            </div>
            <div>
              <dt>Bytes</dt>
              <dd>{source.byteCount.toLocaleString("ko-KR")}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.sourceBoundary}>
          <ShieldCheck aria-hidden="true" size={21} />
          <div>
            <strong>Interpretation boundary</strong>
            <p>{artifact.boundary}</p>
          </div>
        </div>

        <section className={styles.fileFrame}>
          <div className={styles.fileBar}>
            <span><FileCode2 aria-hidden="true" size={15} /> {artifact.displayPath}</span>
            <span>ALLOWLISTED LOCAL SOURCE</span>
          </div>
          <pre>{source.content}</pre>
        </section>
      </section>
    </main>
  );
}
