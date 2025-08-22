"use client";

import { useRouter } from "next/navigation";
import { DockItem } from "@/types/ui";
import Image from "next/image";
import Dock from "@/components/layout/Navigation";
import { getIcon } from "@/lib/icons";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dockItems: DockItem[] = [
    {
      icon: getIcon("account", { size: 24, className: "text-green-200" }),
      label: "Mi cuenta",
      onClick: () => router.push("/account"),
      className: "cursor-pointer",
    },
    {
      icon: getIcon("company", { size: 24, className: "text-green-200" }),
      label: "Empresas",
      onClick: () => router.push("/companies"),
      className: "cursor-pointer",
    },
    {
      icon: getIcon("position", { size: 24, className: "text-green-200" }),
      label: "Puestos",
      onClick: () => router.push("/positions"),
      className: "cursor-pointer",
    },
    {
      icon: getIcon("candidates", { size: 24, className: "text-green-200" }),
      label: "Candidatos",
      onClick: () => router.push("/candidates"),
      className: "cursor-pointer",
    },

    {
      icon: getIcon("info", { size: 24, className: "text-green-200" }),
      label: "Contacto",
      onClick: () => console.log("Contacto clicked"),
      className: "cursor-pointer",
    },
    {
      icon: getIcon("logout", { size: 24, className: "text-green-200" }),
      label: "Cerrar sesión",
      onClick: () => console.log("Cerrar sesión clicked"),
      className: "cursor-pointer",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Header with logo */}
      {/* Top-left logo */}
      <div className="absolute top-10 left-6 z-50">
        <Image
          src="/main-logo-dark.png"
          alt="What2do Logo"
          width={100}
          height={40}
          className="h-10 w-auto"
        />
      </div>

      {/* Main content */}
      <main
        className="min-h-screen relative z-10"
        style={{ paddingTop: "5rem", paddingBottom: "8rem" }}
      >
        <div className="w-full ">{children}</div>
      </main>

      {/* Bottom navigation dock */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <Dock items={dockItems} />
      </div>
    </div>
  );
}
