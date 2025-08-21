"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import BackButton from "@/components/ui/buttons/BackButton";
import ItemCard from "@/components/ui/ItemCard";
import FormModal from "@/components/modals/FormModal";
import EmptyState from "@/components/ui/EmptyState";
import { BiSolidBuildings } from "react-icons/bi";
import { MdOutlineBadge } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { GrDocumentTime } from "react-icons/gr";
import { PiSealCheckDuotone } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";


export default function PositionDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const positionId = params.id as string;

  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateCandidateModal, setShowCreateCandidateModal] =
    useState(false);
  const [showCandidates, setShowCandidates] = useState(false);

  // Helper function to get the appropriate icon and status for generated questions
  const getQuestionsStatus = (questions: any) => {
    if (!questions) {
      return {
        icon: GrDocumentTime,
        status: "Pendiente",
        color: "text-gray-500"
      };
    }
    
    // Check if questions object has sections with actual questions
    const hasSections = questions.sections && Array.isArray(questions.sections) && questions.sections.length > 0;
    const hasQuestions = hasSections && questions.sections.some((section: any) => 
      section.questions && Array.isArray(section.questions) && section.questions.length > 0
    );
    
    if (hasQuestions) {
      return {
        icon: PiSealCheckDuotone,
        status: "Generadas",
        color: "text-green-600"
      };
    } else {
      return {
        icon: AiFillCloseSquare,
        status: "Sin contenido",
        color: "text-red-500"
      };
    }
  };

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
      key_highlights: ["Candidato destacado", "Experiencia en React"]
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
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <MdOutlineBadge size={32} className="text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {position.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCreateCandidateModal(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 text-sm text-white rounded-sm hover:bg-green-700 transition-colors cursor-pointer"
            >
              Añadir Candidato
            </button>
            <button
              onClick={() => setShowEditModal(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-beige text-green-900 rounded-sm hover:bg-green-200 transition-colors cursor-pointer"
            >
              Editar Puesto
            </button>
          </div>
        </div>

        {/* Position Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Descripción del Puesto
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {position.description}
              </p>
            </div>
          </div>

          {/* Sidebar - Quick Stats */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <BiSolidBuildings size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-600">
                  Empresa
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {position.company}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <BsFillQuestionSquareFill size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-600">
                  Preguntas generadas
                </span>
              </div>
              <div className="flex items-center gap-2">
                {(() => {
                  const { icon: StatusIcon, color } = getQuestionsStatus(position.generated_questions);
                  return <StatusIcon size={20} className={color} />;
                })()}
                <p className="text-lg font-bold text-gray-800">
                  {getQuestionsStatus(position.generated_questions).status}
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <IoPeople size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-600">
                  Candidatos inscritos
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {position.candidates}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Candidates Section */}
      <div className="mb-8">
        {candidates.length === 0 ? (
          // Static empty state - no dropdown
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Candidatos ({candidates.length})
                </h2>
              </div>
            </div>
            <EmptyState
              title="No hay candidatos inscritos"
              description="Añade un nuevo candidato para esta posición"
              icon={
                <MdOutlineBadge size={48} className="mx-auto text-gray-400" />
              }
            />
          </div>
        ) : (
          // Dropdown with toggle functionality
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <button
                  onClick={() => setShowCandidates(!showCandidates)}
                  className="flex items-center gap-2 text-left"
                >
                  <h2 className="text-2xl font-bold text-green-800 hover:text-green-500 cursor-pointer">
                    Candidatos ({candidates.length})
                  </h2>
                  <div
                    className={`transform transition-transform cursor-pointer ${
                      showCandidates ? "rotate-180" : ""
                    }`}
                  >
                    <TiArrowSortedDown size={24} className="text-green-800" />
                  </div>
                </button>
                {showCandidates && (
                  <p className="text-green-900 mt-2">
                    Candidatos inscritos para este puesto
                  </p>
                )}
              </div>
            </div>

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
                      additionalInfo={[`Expiración de enlace: ${candidate.link_expires_at}`]}
                      description={candidate.description} //put highlights here
                      detailsRoute={`/candidates/${candidate.id}`}
                      badge={<IoPeople size={16} />}
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
