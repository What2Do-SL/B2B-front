import PageHeader from "@/components/layout/PageHeader";

export default function CandidatesPage() {
  return (
    <>
      {/* Page Header - positioned under logo */}
      <PageHeader
        title={`Candidatos`}
        subtitle="Gestiona y visualiza todos los candidatos"
      />

      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        {/* Content */}
        <div className="flex flex-wrap justify-center gap-6"></div>
      </div>
    </>
  );
}
