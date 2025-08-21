"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import BackButton from "@/components/ui/buttons/BackButton";
import FormModal from "@/components/modals/FormModal";
import EmptyState from "@/components/ui/EmptyState";
import GradientText from "@/components/ui/GradientText";
import { MdEmail } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { PiSealCheckDuotone } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiPercentFill } from "react-icons/pi";
import { SiLevelsdotfyi } from "react-icons/si";

import { formatDate } from "@/lib/utils";

export default function CandidateDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const candidateId = params.id as string;

  const [showLinkExtendModal, setShowLinkExtendModal] = useState(false);
  const [showDownloadCVModal, setShowDownloadCVModal] = useState(false);
  const [showAnalysisDetails, setShowAnalysisDetails] = useState(false);

  // Helper function to check matching breakdown status
  const getMatchingBreakdownStatus = (breakdown: any) => {
    if (!breakdown) {
      return "pending"; // Object doesn't exist
    }

    // Check if breakdown has essential properties indicating completion
    const hasEssentialData =
      breakdown.is_completed &&
      breakdown.overall_score &&
      breakdown.matching_analysis &&
      breakdown.key_strengths &&
      Array.isArray(breakdown.key_strengths) &&
      breakdown.key_strengths.length > 0;

    if (hasEssentialData) {
      return "completed"; // Object exists and has content
    } else {
      return "empty"; // Object exists but empty/incomplete
    }
  };

  const candidate = {
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    status: "Enlace enviado",
    link_expires_at: { $date: { $numberLong: "1755793354077" } },
    candidate_for: { title: "Desarrollador Frontend", company: "Tech Corp" },
  };

  const matching_breakdown = {
    is_completed: true,
    position: { title: "Desarrollador Frontend", company: "Tech Corp" },
    key_strengths: [
      "Capacidad analítica y liderazgo adaptativo que facilitan la gestión técnica y estratégica",
      "Alta motivación por innovación y aprendizaje continuo, clave para entornos SaaS dinámicos",
      "Experiencia comprobada en coordinación de equipos y optimización de procesos en startups",
    ],
    status: "completed",
    position_fit_score: {
      $numberDouble: "85.0",
    },
    culture_fit_score: {
      $numberDouble: "88.0",
    },
    hard_skills_match_score: {
      $numberDouble: "78.0",
    },
    soft_skills_match_score: {
      $numberDouble: "90.0",
    },
    experience_match_score: {
      $numberDouble: "80.0",
    },
    overall_score: {
      $numberDouble: "84.0",
    },
    confidence_level: "high",
    matching_analysis: {
      detailed_analysis: {
        position_fit_rationale:
          "El candidato presenta un perfil Holland primario I (Investigativo) y E (Emprendedor), que encaja muy bien con las demandas del rol de Software Engineer Full Stack en una startup SaaS, donde se requiere rigor técnico, innovación y liderazgo adaptativo. Su motivación por el aprendizaje constante, innovación aplicada y autonomía se alinea con la naturaleza dinámica y multifuncional del puesto. Además, su estilo de trabajo flexible pero estructurado es compatible con el entorno de ritmo acelerado y colaboración requerida.",
        culture_fit_rationale:
          "Los valores personales del candidato, como la innovación, aprendizaje continuo, autonomía y colaboración, están altamente alineados con los valores culturales de la empresa (innovación, transparencia, aprendizaje continuo, mentalidad ágil y colaboración). Su preferencia por ambientes flexibles con estructura clara y su capacidad para adaptarse a cambios frecuentes predicen una buena integración cultural en una startup pequeña y dinámica.",
        hard_skills_match_rationale:
          "El candidato posee habilidades técnicas relevantes como React.js, Agile/SCRUM, DevSecOps y desarrollo full-stack, además de certificaciones en ciberseguridad y metodologías ágiles, que cubren la mayoría de los requerimientos técnicos del puesto. Aunque su experiencia técnica es sólida, su rol reciente ha sido más de liderazgo y gestión técnica, lo que sugiere un ligero ajuste para roles muy hands-on de desarrollo puro, pero con alta capacidad para aportar valor estratégico y técnico.",
        soft_skills_match_rationale:
          "El candidato ha demostrado habilidades blandas clave como liderazgo, trabajo en equipo y comunicación efectiva, que son esenciales para el rol. Su experiencia en la gestión de equipos y proyectos en entornos ágiles resalta su capacidad para colaborar y adaptarse a diferentes dinámicas de trabajo.",
          experience_match_rationale:
          "Con más de 3 años de experiencia en desarrollo full-stack y liderazgo en entornos SaaS y startups, el candidato cumple con el requisito mínimo y aporta experiencia adicional en gestión de proyectos y transformación digital. Su background en coordinación de equipos técnicos y optimización de procesos es un plus para el rol, mostrando potencial para crecimiento hacia posiciones de mayor responsabilidad técnica y estratégica.",
        confidence_rationale:
          "El análisis psicológico y el CV muestran alta consistencia en habilidades blandas, motivaciones y experiencia técnica. Las respuestas son profundas y coherentes, con un alto score de consistencia y confianza en el análisis, lo que permite asignar un nivel de confianza alto en la evaluación.",
      },
    },
  };

  const matchingStatus = getMatchingBreakdownStatus(matching_breakdown);

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
              <div className="p-3 bg-green-100 rounded-sm">
                <FaUserLarge size={32} className="text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {candidate.name}
                </h1>
                <p className="text-lg text-green-800">
                  Candidato para {candidate.candidate_for.title} -{" "}
                  {candidate.candidate_for.company}
                </p>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDownloadCVModal(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 text-sm text-white rounded-sm hover:bg-green-700 transition-colors cursor-pointer"
            >
              Descargar CV
            </button>
            <button
              onClick={() => setShowLinkExtendModal(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-beige text-green-900 rounded-sm hover:bg-green-200 transition-colors cursor-pointer"
            >
              Extender enlace
            </button>
          </div>
        </div>

        {/* Position Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {matchingStatus === "pending" || matchingStatus === "empty" ? (
              // Static empty state - no dropdown
              <EmptyState
                title="El candidato aún no ha completado el cuestionario"
                description="Asegúrate de que el candidato haya recibido el correo."
                icon={
                  <TbDeviceDesktopAnalytics
                    size={48}
                    className="mx-auto text-gray-400"
                  />
                }
              />
            ) : (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="bg-white p-4 rounded-sm border border-gray-200 flex justify-between w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <PiPercentFill size={24} className="text-green-600" />
                      <span className="text-2xl font-bold text-gray-800">
                        Puntuación Global:
                      </span>
                    </div>
                    <div className="text-2xl font-bold">
                      <GradientText>
                        {matching_breakdown.overall_score.$numberDouble}%
                      </GradientText>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-sm border border-gray-200 flex justify-between w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <SiLevelsdotfyi size={24} className="text-green-600" />
                      <span className="text-2xl font-bold text-gray-800">
                        Confianza:
                      </span>
                    </div>
                    <div className="text-2xl font-bold">
                      <GradientText>
                        {matching_breakdown.confidence_level === "high"
                          ? "Alta"
                          : matching_breakdown.confidence_level === "medium"
                          ? "Media"
                          : "Baja"}
                      </GradientText>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Fortalezas Clave
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {matching_breakdown.key_strengths.map((strength, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-sm"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Quick Stats */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <MdEmail size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-600">Email</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {candidate.email}
              </p>
            </div>

            <div className="bg-white p-4 rounded-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <FaMagnifyingGlassChart size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-600">
                  Estado
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {candidate.status}
              </p>
            </div>
            {matchingStatus === "completed" ? (
              <div className="bg-white p-4 rounded-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <TbDeviceDesktopAnalytics
                    size={16}
                    className="text-green-600"
                  />
                  <span className="text-sm font-medium text-gray-600">
                    Matching Status
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <PiSealCheckDuotone size={24} className="text-green-400" />
                  <p className="text-2xl font-bold text-gray-800">
                    Análisis disponible
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white p-4 rounded-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <IoTimer size={16} className="text-green-600" />
                  <span className="text-sm font-medium text-gray-600">
                    Enlace expira
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  {formatDate(candidate.link_expires_at)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Matching Breakdown Section */}
      <div className="mb-8 mt-4">
        {matchingStatus === "completed" && (
          // Dropdown with toggle functionality
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <button
                  onClick={() => setShowAnalysisDetails(!showAnalysisDetails)}
                  className="flex items-center gap-2 text-left"
                >
                  <h2 className="text-2xl font-bold text-green-800 hover:text-green-500 cursor-pointer">
                    Detalles
                  </h2>
                  <div
                    className={`transform transition-transform cursor-pointer ${
                      showAnalysisDetails ? "rotate-180" : ""
                    }`}
                  >
                    <TiArrowSortedDown size={24} className="text-green-800" />
                  </div>
                </button>
                {showAnalysisDetails && (
                  <p className="text-green-900 mt-2">
                    Detalles del análisis realizado para {" "}
                    <span className="font-bold">
                      {matching_breakdown.position.title} -{" "}
                      {matching_breakdown.position.company}
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Analysis Details Dropdown Content */}
            {showAnalysisDetails && (
              <div className="space-y-4">
                <div className="flex gap-1">
                  <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
                    <div className="flex flex-col items-center gap-2 mb-2">
                      <PiPercentFill size={24} className="text-green-600" />
                      <span className="text-xl font-bold text-gray-800">
                        Encaje de Puesto:
                      </span>
                    </div>
                    <div className="text-3xl font-bold">
                      <GradientText>
                        {matching_breakdown.position_fit_score.$numberDouble}%
                      </GradientText>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Razonamiento
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {matching_breakdown.matching_analysis.detailed_analysis.position_fit_rationale
                        .split(". ")
                        .map((sentence, index) => (
                          <p key={index} className="text-gray-700">
                            {sentence.trim()}.
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
                    <div className="flex flex-col items-center gap-2 mb-2">
                      <PiPercentFill size={24} className="text-green-600" />
                      <span className="text-xl font-bold text-gray-800">
                        Encaje de Cultura:
                      </span>
                    </div>
                    <div className="text-3xl font-bold">
                      <GradientText>
                        {matching_breakdown.culture_fit_score.$numberDouble}%
                      </GradientText>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Razonamiento
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {matching_breakdown.matching_analysis.detailed_analysis.culture_fit_rationale
                        .split(". ")
                        .map((sentence, index) => (
                          <p key={index} className="text-gray-700">
                            {sentence.trim()}.
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
                    <div className="flex flex-col items-center gap-2 mb-2">
                      <PiPercentFill size={24} className="text-green-600" />
                      <span className="text-xl font-bold text-gray-800">
                        Encaje de Habilidades Blandas:
                      </span>
                    </div>
                    <div className="text-3xl font-bold">
                      <GradientText>
                        {
                          matching_breakdown.soft_skills_match_score
                            .$numberDouble
                        }
                        %
                      </GradientText>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Razonamiento
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {matching_breakdown.matching_analysis.detailed_analysis.soft_skills_match_rationale
                        .split(". ")
                        .map((sentence, index) => (
                          <p key={index} className="text-gray-700">
                            {sentence.trim()}.
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
                    <div className="flex flex-col items-center gap-2 mb-2">
                      <PiPercentFill size={24} className="text-green-600" />
                      <span className="text-xl font-bold text-gray-800">
                        Encaje de Habilidades Técnicas:
                      </span>
                    </div>
                    <div className="text-3xl font-bold">
                      <GradientText>
                        {
                          matching_breakdown.hard_skills_match_score
                            .$numberDouble
                        }
                        %
                      </GradientText>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Razonamiento
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {matching_breakdown.matching_analysis.detailed_analysis.hard_skills_match_rationale
                        .split(". ")
                        .map((sentence, index) => (
                          <p key={index} className="text-gray-700">
                            {sentence.trim()}.
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
                    <div className="flex flex-col items-center gap-2 mb-2">
                      <PiPercentFill size={24} className="text-green-600" />
                      <span className="text-xl font-bold text-gray-800">
                        Encaje de Experiencia:
                      </span>
                    </div>
                    <div className="text-3xl font-bold">
                      <GradientText>
                        {
                          matching_breakdown.experience_match_score
                            .$numberDouble
                        }
                        %
                      </GradientText>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Razonamiento
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {matching_breakdown.matching_analysis.detailed_analysis.experience_match_rationale
                        .split(". ")
                        .map((sentence, index) => (
                          <p key={index} className="text-gray-700">
                            {sentence.trim()}.
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Edit Position Modal */}
      <FormModal
        isOpen={showLinkExtendModal}
        onClose={() => setShowLinkExtendModal(false)}
        title="Extender Enlace"
        variant="green"
      >
        {/* <EditPositionForm
          positionId={positionId}
          onSuccess={() => setShowEditModal(false)}
        /> */}
        <div className="p-4 text-center text-gray-600">
          Formulario de extensión de enlace aquí
        </div>
      </FormModal>

      {/* Create Candidate Modal */}
      <FormModal
        isOpen={showDownloadCVModal}
        onClose={() => setShowDownloadCVModal(false)}
        title="Descargar CV"
        variant="green"
      >
        {/* <DownloadCVForm
          positionId={positionId}
          onSuccess={() => setShowDownloadCVModal(false)}
        /> */}
        <div className="p-4 text-center text-gray-600">
          Formulario de descarga de CV aquí
        </div>
      </FormModal>
    </div>
  );
}
