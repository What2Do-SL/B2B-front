"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import DetailsPageHeader from "@/components/layout/DetailsPageHeader";
import DetailsViewButtons from "@/components/ui/buttons/DetailsViewButtons";
import StatCard from "@/components/ui/StatCard";
import FormModal from "@/components/modals/FormModal";
import { getIcon } from "@/lib/icons";

export default function AccountPage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);
  const router = useRouter();

  const user = {
    id: "user-123",
    name: "John Doe",
    email: "john.doe@example.com",
    company: "Example Corp",
  };

  return (
    <>
      {/* Page Header - positioned under logo */}
      <PageHeader title="Mi Cuenta" subtitle="Gestiona tu cuenta" />

      <div className="p-6 md:p-8 max-w-5xl mx-auto">
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <DetailsPageHeader
              icon={getIcon("account", { size: 32 })}
              title={`Hola, ${user.name}`}
              subtitle="¡Gracias por ser parte de What2Do!"
            />
            {/* Edit Button */}
            <DetailsViewButtons
              labelLeft="Editar perfil"
              onClickLeft={() => setShowEditModal(true)}
              labelRight="Cambiar Contraseña"
              onClickRight={() => setShowPasswordChangeModal(true)}
              rightYPadding="py-2"
              rightTextSize="text-xs"
            />
          </div>
          <div className="space-y-4">
            <StatCard
              icon={getIcon("email", { size: 20 })}
              label="Email"
              value={user.email}
            />
            <StatCard
              icon={getIcon("company", { size: 20 })}
              label="Empresa"
              value={user.company}
            />
          </div>
        </div>

        {/* Edit Modal */}
        <FormModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          title="Editar Detalles"
          variant="green"
        >
          <p>Edit modal</p>
          {/* <EditUserForm 
            userId={user.id}
            onSuccess={() => setShowEditModal(false)}
            onCancel={() => setShowEditModal(false)}
          /> */}
        </FormModal>

        {/* Create Modal */}
        <FormModal
          isOpen={showPasswordChangeModal}
          onClose={() => setShowPasswordChangeModal(false)}
          title="Cambiar Contraseña"
          variant="green"
        >
          <p>Create modal</p>
          {/* <ChangePasswordForm 
            onSuccess={() => setShowPasswordChangeModal(false)}
            onCancel={() => setShowPasswordChangeModal(false)}
          /> */}
        </FormModal>
      </div>
    </>
  );
}
