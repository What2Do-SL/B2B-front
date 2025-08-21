"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import ItemCard from "@/components/ui/ItemCard";
import ItemList from "@/components/ui/ItemList";
import ViewToggle from "@/components/ui/ViewToggle";
import FormModal from "@/components/modals/FormModal";
import CreateCard from "@/components/ui/CreateCard";
import { MdOutlineBadge } from "react-icons/md";
import { RiFunctionAddFill } from "react-icons/ri";
import { formatDate } from "@/lib/utils";

export default function CandidatesPage() {
  const [view, setView] = useState<"cards" | "list">("cards");
  const [showLinkExtendModal, setShowLinkExtendModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingCandidateId, setEditingCandidateId] = useState<string>("");
  const router = useRouter();

  const candidates: any[] = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      status: "Enlace enviado",
      link_expires_at: { $date: { $numberLong: "1755793354077" } },
      candidate_for: { title: "Desarrollador Frontend", company: "Tech Corp" },
    },
    {
      id: 2,
      name: "María Gómez",
      email: "maria.gomez@example.com",
      status: "Enlace enviado",
      link_expires_at: { $date: { $numberLong: "1755793354077" } },
    },
    {
      id: 3,
      name: "Pedro López",
      email: "pedro.lopez@example.com",
      status: "Enlace enviado",
      link_expires_at: { $date: { $numberLong: "1755793354077" } },
      key_highlights: ["Candidato destacado", "Experiencia en React"],
    },
  ];

  const listColumns = [
    { key: "name", label: "Nombre", primary: true },
    { key: "email", label: "Email" },
    {
      key: "candidate_for",
      label: "Candidato para",
      render: (value: any) =>
        value ? `${value.title} - ${value.company}` : "Sin asignar",
    },
    { key: "status", label: "Estado" },
    {
      key: "link_expires_at",
      label: "Enlace expira",
      render: (value: any) => formatDate(value),
    },
  ];

  const handleCreate = () => {
    setShowCreateModal(true); // Opens the create modal
  };

  const handleView = (id: string) => {
    router.push(`/candidates/${id}`);
  };

  const handleEdit = (id: string) => {
    // Open edit modal
    console.log("Edit candidate", id);
    setEditingCandidateId(id);
    setShowLinkExtendModal(true);
  };

  return (
    <>
      {/* Page Header - positioned under logo */}
      <PageHeader
        title="Candidatos"
        subtitle="Gestiona y visualiza todos los candidatos"
      />

      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-end">
          <ViewToggle currentView={view} onToggle={setView} />
        </div>

        {/* Content */}
        {view === "cards" ? (
          <div className="flex flex-wrap justify-center gap-6">
            {candidates.map((candidate) => (
              <ItemCard
                key={candidate.id}
                title={candidate.name}
                subtitle={`${candidate.email}`}
                additionalInfo={[
                  `Estado: ${candidate.status}`,
                  `Enlace expira: ${formatDate(candidate.link_expires_at)}`,
                ]}
                description={candidate.description}
                detailsRoute={`/candidates/${candidate.id}`}
                badge={<MdOutlineBadge size={20} />}
                onEdit={handleEdit}
              />
            ))}
            <CreateCard
              icon={<RiFunctionAddFill size={48} className="text-green-600" />}
              label="Añadir Candidato"
              description={`Crea un nuevo candidato ${
                candidates.length === 0 ? "para comenzar." : ""
              }`}
              onClick={handleCreate}
            />
          </div>
        ) : (
          <ItemList
            items={candidates}
            columns={listColumns}
            onView={handleView}
            onEdit={handleEdit}
            onCreateNew={handleCreate}
            createIcon={<RiFunctionAddFill />}
            createLabel="Añadir nuevo candidato"
          />
        )}

        {/* Edit Modal */}
        <FormModal
          isOpen={showLinkExtendModal}
          onClose={() => setShowLinkExtendModal(false)}
          title="Editar Candidato"
          variant="green"
        >
          <p>Edit modal</p>
          {/* <EditCandidateForm
            candidateId={editingCandidateId}
            onSuccess={() => setShowLinkExtendModal(false)}
            onCancel={() => setShowLinkExtendModal(false)}
          /> */}
        </FormModal>

        {/* Create Modal */}
        <FormModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          title="Añadir Nuevo Candidato"
          variant="green"
        >
          <p>Create modal</p>
          {/* <CreateCandidateForm
            onSuccess={() => setShowCreateModal(false)}
            onCancel={() => setShowCreateModal(false)}
          /> */}
        </FormModal>
      </div>
    </>
  );
}
{
  /* <PageHeader
        title={`Candidatos`}
        subtitle="Gestiona y visualiza todos los candidatos"
      /> */
}
