"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import BackButton from "@/components/ui/buttons/BackButton";
import ItemCard from "@/components/ui/ItemCard";
import FormModal from "@/components/modals/FormModal";
import EmptyState from "@/components/ui/EmptyState";
import DetailsPageHeader from "@/components/layout/DetailsPageHeader";
import DetailsViewButtons from "@/components/ui/buttons/DetailsViewButtons";
import DropdownToggle from "@/components/ui/DropdownToggle";
import StatCard from "@/components/ui/StatCard";
import DetailsCard from "@/components/ui/DetailsCard";
import { getIcon } from "@/lib/icons";

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
          <DetailsPageHeader
            icon={getIcon("company", { size: 32 })}
            title={company.name}
          />
          {/* Edit Button */}
          <DetailsViewButtons
            labelLeft="Añadir Puesto"
            onClickLeft={() => setShowCreatePositionModal(true)}
            labelRight="Editar Empresa"
            onClickRight={() => setShowEditModal(true)}
          />
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DetailsCard
            label="Cultura Empresarial"
            description={company.culture}
          />
          {/* Sidebar - Quick Stats */}
          <div className="space-y-4">
            <StatCard
              icon={getIcon("employees")}
              label="Empleados"
              value={company.size}
            />
            <StatCard
              icon={getIcon("industry")}
              label="Industria"
              value={company.industry}
            />
          </div>
        </div>
      </div>

      {/* Positions Section */}
      <div className="mb-8">
        {positions.length === 0 ? (
          // Static empty state - no dropdown
          <EmptyState
            title={`Puestos (${positions.length})`}
            subtitle="No hay puestos abiertos"
            description="Añade un nuevo puesto para esta empresa"
            icon={getIcon("position", {
              size: 48,
              className: "mx-auto text-gray-400",
            })}
          />
        ) : (
          // Dropdown with toggle functionality
          <div>
            <DropdownToggle
              onClick={() => setShowPositions(!showPositions)}
              isOpen={showPositions}
              title={`Puestos (${positions.length})`}
              subtitle="Puestos abiertos para esta empresa"
            />

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
                      additionalInfo={[`Nivel: ${position.level}`]}
                      description={position.description}
                      detailsRoute={`/positions/${position.id}`}
                      badge={getIcon("position", {
                        size: 18,
                        className: "text-beige",
                      })}
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
