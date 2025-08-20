"use client";

import Image from "next/image";
import Dock from "@/components/layout/navigation";
import { BiSolidBuildings } from "react-icons/bi";
import { MdOutlineBadge } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { TbInfoSquareFilled } from "react-icons/tb";
import { IoLogOutSharp } from "react-icons/io5";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dockItems = [
    {
      icon: <BiSolidBuildings />,
      label: "Empresas",
      onClick: () => console.log("Empresas clicked"),
      className: "",
    },
    {
      icon: <MdOutlineBadge />,
      label: "Posiciones",
      onClick: () => console.log("Posiciones clicked"),
      className: "",
    },
    {
      icon: <IoPeople />,
      label: "Candidatos",
      onClick: () => console.log("Candidatos clicked"),
      className: "",
    },
    {
      icon: <TbInfoSquareFilled />,
      label: "Contacto",
      onClick: () => console.log("Contacto clicked"),
      className: "",
    },
    {
      icon: <IoLogOutSharp />,
      label: "Cerrar sesión",
      onClick: () => console.log("Cerrar sesión clicked"),
      className: "",
    },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bg.png')" }}
    >

      {/* Header with logo */}
      {/* Top-left logo */}
      <div className="absolute top-4 left-4 z-50">
        <Image
          src="/main-logo-dark.png"
          alt="What2do Logo"
          width={100}
          height={40}
          className="h-10 w-auto"
        />
      </div>

      {/* Main content */}
      <main className="flex items-center justify-center min-h-screen relative z-10">
        <div className="w-full text-center">
          {children}
        </div>
      </main>

      {/* Bottom navigation dock */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <Dock items={dockItems} />
      </div>
    </div>
  );
}
