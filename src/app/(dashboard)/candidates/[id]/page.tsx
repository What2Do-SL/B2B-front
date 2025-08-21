import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/ui/buttons/BackButton";

export default function CandidateDetailsPage({ 
  params 
}: { 
  params: { id: string } 
}) {
    const candidateId = params.id;
  return (
    <>
      {/* Page Header - positioned under logo */}
      <PageHeader
        title={`Candidato ${candidateId}`}
        subtitle="Gestiona y visualiza todos los detalles del candidato"
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
