import PageHeader from "@/components/layout/PageHeader";

export default function PositionsPage() {
  return (
    <>
      {/* Page Header - positioned under logo */}
      <PageHeader
        title={`Puestos`}
        subtitle="Gestiona y visualiza todos las ofertas de trabajo"
      />

      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        {/* Content */}
        <div className="flex flex-wrap justify-center gap-6"></div>
      </div>
    </>
  );
}
