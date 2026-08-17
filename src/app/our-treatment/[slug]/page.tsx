import { notFound } from 'next/navigation';
import { TreatmentDetailClient } from '../../../components/TreatmentDetailClient';
import { TREATMENT_PAGE_MAP, TREATMENT_PAGES } from '../../../data/treatmentPagesData';

export async function generateStaticParams() {
  return TREATMENT_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = TREATMENT_PAGE_MAP[slug];

  if (!treatment) {
    notFound();
  }

  return <TreatmentDetailClient slug={slug} />;
}
