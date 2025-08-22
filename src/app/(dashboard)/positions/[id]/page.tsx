"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import BackButton from "@/components/ui/buttons/BackButton";
import ItemCard from "@/components/ui/ItemCard";
import StatCard from "@/components/ui/StatCard";
import FormModal from "@/components/modals/FormModal";
import EmptyState from "@/components/ui/EmptyState";
import DetailsPageHeader from "@/components/layout/DetailsPageHeader";
import DetailsViewButtons from "@/components/ui/buttons/DetailsViewButtons";
import DropdownToggle from "@/components/ui/DropdownToggle";
import QuestionsStatusCard from "@/features/positions/components/QuestionsStatusCard";
import DetailsCard from "@/components/ui/DetailsCard";
import { getIcon } from "@/lib/icons";

export default function PositionDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const positionId = params.id as string;

  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateCandidateModal, setShowCreateCandidateModal] =
    useState(false);
  const [showCandidates, setShowCandidates] = useState(false);

  const position = {
    id: positionId,
    title: "Desarrollador Frontend",
    company: "Tech Corp",
    level: "Senior",
    candidates: 5,
    generated_questions: {},
    description: "Descripción del puesto de Desarrollador Frontend",
  };

  const candidates: any[] = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      status: "Enlace enviado",
      link_expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24),
    },
    {
      id: 2,
      name: "María Gómez",
      email: "maria.gomez@example.com",
      status: "Enlace enviado",
      link_expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24),
    },
    {
      id: 3,
      name: "Pedro López",
      email: "pedro.lopez@example.com",
      status: "Enlace enviado",
      link_expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24),
      key_highlights: ["Candidato destacado", "Experiencia en React"],
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <BackButton />

      {/* Position Header */}
      <div className="mt-6 ">
        {/* Position Name and Icon */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Position Name Section */}
          <DetailsPageHeader
            icon={getIcon("position", { size: 32 })}
            title={position.title}
          />

          {/* Edit Button */}
          <DetailsViewButtons
            labelLeft="Añadir Candidato"
            onClickLeft={() => setShowCreateCandidateModal(true)}
            labelRight="Editar Puesto"
            onClickRight={() => setShowEditModal(true)}
            leftYPadding="py-3.5"
            leftTextSize="text-sm"
          />
        </div>

        {/* Position Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DetailsCard
            label="Descripción del Puesto"
            description={position.description}
          />

          {/* Sidebar - Quick Stats */}
          <div className="space-y-4">
            <StatCard
              icon={getIcon("company")}
              label="Empresa"
              value={position.company}
            />
            {/**Level stat */}
            <StatCard
              icon={getIcon("position-level", { size: 18 })}
              label="Nivel"
              value={position.level}
            />
            <QuestionsStatusCard
              generatedQuestions={position.generated_questions}
            />
          </div>
        </div>
      </div>

      {/* Candidates Section */}
      <div className="mb-8">
        {candidates.length === 0 ? (
          // Static empty state - no dropdown
            <EmptyState
              title={`Candidatos (${candidates.length})`}
              subtitle="No hay candidatos inscritos"
              description="Añade un nuevo candidato para esta posición"
              icon={getIcon("add-candidate", {
                size: 48,
                className: "text-gray-400 mx-auto",
              })}
            />
        ) : (
          // Dropdown with toggle functionality
          <div>
            <DropdownToggle
              onClick={() => setShowCandidates(!showCandidates)}
              isOpen={showCandidates}
              title={`Candidatos (${candidates.length})`}
              subtitle="Candidatos inscritos para este puesto"
            />

            {/* Candidates Dropdown Content */}
            {showCandidates && (
              <div className="p-4">
                <div className="flex flex-wrap justify-center gap-6">
                  {candidates.map((candidate) => (
                    <ItemCard
                      key={candidate.id}
                      id={candidate.id.toString()}
                      title={candidate.name}
                      subtitle={`Estado: ${candidate.status}`}
                      additionalInfo={[
                        `Expiración de enlace: ${candidate.link_expires_at}`,
                      ]}
                      description={candidate.description} //put highlights here
                      detailsRoute={`/candidates/${candidate.id}`}
                      badge={getIcon("candidate", { className: "text-beige" })}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Edit Position Modal */}
      <FormModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Editar Puesto"
        variant="green"
      >
        {/* <EditPositionForm
          positionId={positionId}
          onSuccess={() => setShowEditModal(false)}
        /> */}
        <div className="p-4 text-center text-gray-600">
          Formulario de edición de puesto aquí
        </div>
      </FormModal>

      {/* Create Candidate Modal */}
      <FormModal
        isOpen={showCreateCandidateModal}
        onClose={() => setShowCreateCandidateModal(false)}
        title="Nuevo Candidato"
        variant="green"
      >
        {/* <CreateCandidateForm
          positionId={positionId}
          onSuccess={() => setShowCreateCandidateModal(false)}
        /> */}
        <div className="p-4 text-center text-gray-600">
          Formulario de creación de candidato aquí
        </div>
      </FormModal>
    </div>
  );
}
