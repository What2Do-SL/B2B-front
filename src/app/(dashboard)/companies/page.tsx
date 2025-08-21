"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import ItemCard from "@/components/ui/ItemCard";
import ItemList from "@/components/ui/ItemList";
import ViewToggle from "@/components/ui/ViewToggle";
import FormModal from "@/components/modals/FormModal";
import CreateCard from "@/components/ui/CreateCard";
import { BiSolidBuildings } from "react-icons/bi";

export default function CompaniesPage() {
  const [view, setView] = useState<"cards" | "list">("cards");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingCompanyId, setEditingCompanyId] = useState<string>("");
  const router = useRouter();

  // Mock data - replace with real data later
  const companies: any[] = [
    { id: 1, name: "Tech Corp", employees: 50, description: "..." },
    { id: 2, name: "Design Studio", employees: 25, description: "..." },
    { id: 3, name: "Marketing Agency", employees: 10, description: "..." },
    { id: 4, name: "Creative Agency", employees: 15, description: "..." },
    { id: 5, name: "Digital Agency", employees: 20, description: "..." },
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
        {companies.length > 0 && (
          <div className="mb-8 flex justify-end">
            <ViewToggle currentView={view} onToggle={setView} />
          </div>
        )}

        {/* Content */}
        {companies.length > 0 ? (
          view === "cards" ? (
            <div className="flex flex-wrap justify-center gap-6">
              {companies.map((company) => (
                <ItemCard
                  key={company.id}
                  title={company.name}
                  subtitle={`${company.employees} empleados`}
                  description={company.description}
                  detailsRoute={`/companies/${company.id}`}
                  badge={<BiSolidBuildings size={20}/>}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          ) : (
            <ItemList
              items={companies}
              columns={listColumns}
              onView={handleView}
              onEdit={handleEdit}
            />
          )
        ) : (
          <div className="flex justify-center items-center py-16">
            <CreateCard
              label="Añadir Empresa"
              description="Crea una nueva empresa para comenzar."
              onClick={handleCreate}
            />
          </div>
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
      </div>
    </>
  );
}
