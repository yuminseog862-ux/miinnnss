import { permanentRedirect } from "next/navigation";

type LegacyWorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlueGarageWorkRedirectPage({ params }: LegacyWorkPageProps) {
  const { slug } = await params;
  permanentRedirect(`/creative/work/${slug}`);
}
