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

export default function PositionsPage() {
  const [view, setView] = useState<"cards" | "list">("cards");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPositionId, setEditingPositionId] = useState<string>("");
  const router = useRouter();

  const positions: any[] = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "Tech Corp",
      level: "Senior",
      candidates: 5,
      generated_questions: {},
      description: "Descripción del puesto de Desarrollador Frontend"
    },
    {
      id: 2,
      title: "Diseñador UI/UX",
      company: "Design Studio",
      level: "Mid",
      candidates: 3,
      generated_questions: {},
      description: "Descripción del puesto de Diseñador UI/UX"
    },
    {
      id: 3,
      title: "Gerente de Marketing",
      company: "Marketing Agency",
      level: "Senior",
      candidates: 2,
      generated_questions: { blabla: ["blabla"] },
      description: "Descripción del puesto de Gerente de Marketing"
    },
    {
      id: 4,
      title: "Desarrollador Backend",
      company: "Creative Agency",
      level: "Junior",
      candidates: 4,
      generated_questions: {},
      description: "Descripción del puesto de Desarrollador Backend"
    },
    {
      id: 5,
      title: "Analista de Datos",
      company: "Digital Agency",
      level: "Mid",
      candidates: 1,
      generated_questions: {},
      description: "Descripción del puesto de Analista de Datos"
    },
  ];

  const listColumns = [
    { key: "title", label: "Título", primary: true },
    { key: "company", label: "Empresa" },
    { key: "level", label: "Nivel" },
    // { key: "generated_questions", label: "Preguntas generadas" }, boolean
    {
      key: "candidates",
      label: "Candidatos",
      render: (value: number) => `${value} candidatos`,
    },
  ];

  const handleCreate = () => {
    setShowCreateModal(true); // Opens the create modal
  };

  const handleView = (id: string) => {
    router.push(`/positions/${id}`);
  };

  const handleEdit = (id: string) => {
    // Open edit modal
    console.log("Edit position", id);
    setEditingPositionId(id);
    setShowEditModal(true);
  };

  return (
    <>
      {/* Page Header - positioned under logo */}
      <PageHeader
        title="Puestos"
        subtitle="Gestiona y visualiza todos las ofertas de trabajo"
      />

      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-end">
          <ViewToggle currentView={view} onToggle={setView} />
        </div>

        {/* Content */}
        {view === "cards" ? (
          <div className="flex flex-wrap justify-center gap-6">
            {positions.map((position) => (
              <ItemCard
                key={position.id}
                title={position.title}
                subtitle={`${position.company}`}
                additionalInfo={[`Nivel: ${position.level}`, `Candidatos: ${position.candidates || 0}`]}
                description={position.description}
                detailsRoute={`/positions/${position.id}`}
                badge={getIcon("position", { size: 20, className: "text-beige" })}
                onEdit={handleEdit}
              />
            ))}
            <CreateCard
              icon={getIcon("add-position", { size: 48 })}
              label="Añadir Puesto"
              description={`Crea un nuevo puesto ${
                positions.length === 0 ? "para comenzar." : ""
              }`}
              onClick={handleCreate}
            />
          </div>
        ) : (
          <ItemList
            items={positions}
            columns={listColumns}
            onView={handleView}
            onEdit={handleEdit}
            onCreateNew={handleCreate}
            createIcon={getIcon("add-position")}
            createLabel="Añadir nuevo puesto"
          />
        )}

        {/* Edit Modal */}
        <FormModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          title="Editar Puesto"
          variant="green"
        >
          <p>Edit modal</p>
          {/* <EditPositionForm
            positionId={editingPositionId}
            onSuccess={() => setShowEditModal(false)}
            onCancel={() => setShowEditModal(false)}
          /> */}
        </FormModal>

        {/* Create Modal */}
        <FormModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          title="Crear Nuevo Puesto"
          variant="green"
        >
          <p>Create modal</p>
          {/* <CreatePositionForm
            onSuccess={() => setShowCreateModal(false)}
            onCancel={() => setShowCreateModal(false)}
          /> */}
        </FormModal>
      </div>
    </>
  );
}