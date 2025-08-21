"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import BackButton from "@/components/ui/buttons/BackButton";
import ItemCard from "@/components/ui/ItemCard";
import FormModal from "@/components/modals/FormModal";
import EmptyState from "@/components/ui/EmptyState";
import { BiSolidBuildings } from "react-icons/bi";
import { MdOutlineBadge } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { BsBuildingFillGear } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";

export default function CompanyDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const companyId = params.id as string;

  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreatePositionModal, setShowCreatePositionModal] = useState(false);
  const [showPositions, setShowPositions] = useState(false);

  // Mock data - replace with real API call
  const company = {
    id: companyId,
    name: "Tech Corp",
    description:
      "Empresa innovadora especializada en desarrollo de software y soluciones tecnológicas. Con más de 10 años de experiencia en el mercado, ofrecemos servicios de consultoría, desarrollo web y aplicaciones móviles.",
    industry: "Tecnología",
    size: 50,
    culture: "Ambiente colaborativo, innovación constante, work-life balance",
  };

  // Mock positions data
  const positions: any[] = [
    {
      id: 1,
      title: "Senior React Developer",
      level: "Senior",
      description: "Buscamos un desarrollador React senior para liderar el desarrollo front-end...",
      candidates: 5,
      generated_questions: {},
    },
    {
      id: 2,
      title: "DevOps Engineer",
      level: "Mid",
      description: "Responsable de la infraestructura cloud y pipelines de CI/CD...",
      candidates: 3,
      generated_questions: {},
    },
    {
      id: 3,
      title: "UI/UX Designer",
      level: "Junior",
      description: "Diseñador creativo para mejorar la experiencia de usuario...",
      candidates: 8,
      generated_questions: {},
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <BackButton />

      {/* Company Header */}
      <div className="mt-6 ">
        {/* Company Name and Icon */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Name Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <BiSolidBuildings size={32} className="text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {company.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCreatePositionModal(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors cursor-pointer"
            >
              Añadir Puesto
            </button>
            <button
              onClick={() => setShowEditModal(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-beige text-green-900 rounded-sm hover:bg-green-200 transition-colors cursor-pointer"
            >
              Editar Empresa
            </button>
          </div>
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Cultura Empresarial
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {company.culture}
              </p>
            </div>
          </div>

          {/* Sidebar - Quick Stats */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <FaBuildingUser size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-600">
                  Empleados
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {company.size}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <BsBuildingFillGear size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-600">
                  Industria
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-800">
                {company.industry}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <MdOutlineBadge size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-600">
                  Puestos abiertos
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {positions.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Positions Section */}
      <div className="mb-8">
        {positions.length === 0 ? (
          // Static empty state - no dropdown
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Puestos ({positions.length})
                </h2>
              </div>
            </div>
            <EmptyState
              title="No hay puestos abiertos"
              description="Añade un nuevo puesto para esta empresa"
              icon={<MdOutlineBadge size={48} className="mx-auto text-gray-400" />}
            />
          </div>
        ) : (
          // Dropdown with toggle functionality
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <button
                  onClick={() => setShowPositions(!showPositions)}
                  className="flex items-center gap-2 text-left"
                >
                  <h2 className="text-2xl font-bold text-green-800 hover:text-green-500 cursor-pointer">
                    Puestos ({positions.length})
                  </h2>
                  <div className={`transform transition-transform cursor-pointer ${showPositions ? 'rotate-180' : ''}`}>
                    <TiArrowSortedDown size={24} className="text-green-800" />
                  </div>
                </button>
                {showPositions && (
                  <p className="text-green-900 mt-2">
                    Puestos abiertos para esta empresa
                  </p>
                )}
              </div>
            </div>

            {/* Positions Dropdown Content */}
            {showPositions && (
              <div className="p-4">
                <div className="flex flex-wrap justify-center gap-6">
                  {positions.map((position) => (
                    <ItemCard
                      key={position.id}
                      id={position.id.toString()}
                      title={position.title}
                      subtitle={`Candidatos: ${position.candidates || 0}`}
                      additionalInfo={[
                        `Nivel: ${position.level}`,
                      ]}
                      description={position.description}
                      detailsRoute={`/positions/${position.id}`}
                      badge={<MdOutlineBadge size={16}/>}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Edit Company Modal */}
      <FormModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Editar Empresa"
        variant="green"
      >
        {/* <EditCompanyForm 
          companyId={companyId}
          onSuccess={() => setShowEditModal(false)}
        /> */}
        <div className="p-4 text-center text-gray-600">
          Formulario de edición de empresa aquí
        </div>
      </FormModal>

      {/* Create Position Modal */}
      <FormModal
        isOpen={showCreatePositionModal}
        onClose={() => setShowCreatePositionModal(false)}
        title="Nueva Posición"
        variant="green"
      >
        {/* <CreatePositionForm 
          companyId={companyId}
          onSuccess={() => setShowCreatePositionModal(false)}
        /> */}
        <div className="p-4 text-center text-gray-600">
          Formulario de creación de posición aquí
        </div>
      </FormModal>
    </div>
  );
}
