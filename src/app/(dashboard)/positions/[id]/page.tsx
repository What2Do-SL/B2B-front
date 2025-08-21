import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/ui/buttons/BackButton";

export default function PositionDetailsPage({ 
  params 
}: { 
  params: { id: string } 
}) {
    const positionId = params.id;
  return (
    <>
      {/* Page Header - positioned under logo */}
      <PageHeader
        title={`Puesto ${positionId}`}
        subtitle="Gestiona y visualiza todos los detalles del puesto"
      />

      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        {/* Content */}
        {/* Add back button */}
        <BackButton className="mb-4" />
        <div className="flex flex-wrap justify-center gap-6"></div>
      </div>
    </>
  );
}
