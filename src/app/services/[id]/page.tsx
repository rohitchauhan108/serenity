import { notFound } from 'next/navigation';
import { ServiceDetailClient } from '../../../components/ServiceDetailClient';
import { SERVICES_DATA } from '../../../data/clinicData';

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    id: service.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient serviceId={id} />;
}
