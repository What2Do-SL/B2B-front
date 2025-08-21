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

export default function PositionsPage() {
  const [view, setView] = useState<"cards" | "list">("cards");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPositionId, setEditingPositionId] = useState<string>("");
  const router = useRouter();

  const listColumns = [
    { key: "title", label: "Título", primary: true },
    { key: "company", label: "Empresa" },
    { key: "level", label: "Nivel" },
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
