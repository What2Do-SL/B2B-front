"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import ItemCard from "@/components/ui/ItemCard";
import ItemList from "@/components/ui/ItemList";
import ViewToggle from "@/components/ui/ViewToggle";
import FormModal from "@/components/modals/FormModal";
import CreateCard from "@/components/ui/CreateCard";
import { getIcon } from "@/lib/icons";

export default function CompaniesPage() {
  const [view, setView] = useState<"cards" | "list">("cards");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingCompanyId, setEditingCompanyId] = useState<string>("");
  const router = useRouter();

  // Mock data - replace with real data later
  const companies: any[] = [
    { id: 1, name: "Tech Corp", employees: 50, industry: "Technology", description: "..." },
    { id: 2, name: "Design Studio", employees: 25, industry: "Design", description: "..." },
    { id: 3, name: "Marketing Agency", employees: 10, industry: "Marketing", description: "..." },
    { id: 4, name: "Creative Agency", employees: 15, industry: "Creative", description: "..." },
    { id: 5, name: "Digital Agency", employees: 20, industry: "Digital", description: "..." },
    // Empty array = show create card
  ];

  const listColumns = [
    { key: "name", label: "Empresa", primary: true },
    {
      key: "employees",
      label: "Empleados",
      render: (value: number) => `${value} empleados`,
    },
    { key: "industry", label: "Industria" },
    { key: "positions", label: "Puestos" },
  ];

  const handleCreate = () => {
    setShowCreateModal(true); // Opens the create modal
  };

  const handleView = (id: string) => {
    router.push(`/companies/${id}`);
  };

  const handleEdit = (id: string) => {
    // Open edit modal
    console.log("Edit company", id);
    setEditingCompanyId(id);
    setShowEditModal(true);
  };

  return (
    <>
      {/* Page Header - positioned under logo */}
      <PageHeader
        title="Empresas"
        subtitle="Gestiona y visualiza todas tus empresas"
      />

      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-end">
          <ViewToggle currentView={view} onToggle={setView} />
        </div>

        {/* Content */}
        {view === "cards" ? (
          <div className="flex flex-wrap justify-center gap-6">
            {companies.map((company) => (
              <ItemCard
                key={company.id}
                title={company.name}
                subtitle={`${company.positions || 0} puestos abiertos`}
                additionalInfo={[`Industria: ${company.industry}`, `Empleados: ${company.employees}`]}
                description={company.description}
                detailsRoute={`/companies/${company.id}`}
                badge={getIcon("company", { size: 20, className: "text-beige" })}
                onEdit={handleEdit}
              />
            ))}
            <CreateCard
              icon={getIcon("add-company", { size: 48 })}
              label="Añadir Empresa"
              description={`Crea una nueva empresa ${
                companies.length === 0 ? "para comenzar." : ""
              }`}
              onClick={handleCreate}
            />
          </div>
        ) : (
          <ItemList
            items={companies}
            columns={listColumns}
            onView={handleView}
            onEdit={handleEdit}
            onCreateNew={handleCreate}
            createIcon={getIcon("add-company")}
            createLabel="Añadir nueva empresa"
          />
        )}

        {/* Edit Modal */}
        <FormModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          title="Editar Empresa"
          variant="green"
        >
          <p>Edit modal</p>
          {/* <EditCompanyForm 
            companyId={editingCompanyId}
            onSuccess={() => setShowEditModal(false)}
            onCancel={() => setShowEditModal(false)}
          /> */}
        </FormModal>

        {/* Create Modal */}
        <FormModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          title="Crear Nueva Empresa"
          variant="green"
        >
          <p>Create modal</p>
          {/* <CreateCompanyForm 
            onSuccess={() => setShowCreateModal(false)}
            onCancel={() => setShowCreateModal(false)}
          /> */}
        </FormModal>
      </div>
    </>
  );
}
