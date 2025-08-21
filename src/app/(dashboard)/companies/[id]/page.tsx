import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/ui/buttons/BackButton";

export default function CompanyDetailsPage({ 
  params 
}: { 
  params: { id: string } 
}) {
    const companyId = params.id;
  return (
    <>
      {/* Page Header - positioned under logo */}
      <PageHeader
        title={`Empresa ${companyId}`}
        subtitle="Gestiona y visualiza todos los detalles de la empresa"
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
