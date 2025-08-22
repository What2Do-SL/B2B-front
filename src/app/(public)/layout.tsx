"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import FormModal from "@/components/modals/FormModal";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    {
      label: "App",
      bgColor: "var(--color-green-800)",
      textColor: "beige",
      links: [
        { label: "Cómo funciona", ariaLabel: "Cómo funciona", href: "/" },
        { label: "Precios", ariaLabel: "Precios", href: "/" },
        { label: "Soy particular", ariaLabel: "Soy particular", href: "/" },
        { label: "Legal", ariaLabel: "Legal", href: "/" },
      ],
    },
    {
      label: "Contacto",
      bgColor: "var(--color-green-800)",
      textColor: "beige",
      links: [
        {
          label: "Email",
          ariaLabel: "Correo",
          href: "mailto:info@what2do.es",
        },
        {
          label: "Instagram",
          ariaLabel: "Instagram",
          href: "https://www.instagram.com/what2do_tech/",
        },
        {
          label: "TikTok",
          ariaLabel: "TikTok",
          href: "https://www.tiktok.com/@what2do_tech",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://www.linkedin.com/company/what2do-es/",
        },
      ],
    },
  ];
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header
        logo="/main-logo.png"
        logoMobile="/main-logo-short.png"
        logoAlt="W2D"
        baseColor="var(--color-green-900)"
        menuColor="var(--color-green-200)"
        buttonBgColor="var(--color-green-200)"
        buttonTextColor="var(--color-green-950)"
        ease="power3.out"
        items={items}
        setShowLogin={setShowLogin}
      />
      {children}
      <FormModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        title="Iniciar sesión"
        variant="beige"
      >
        <p className="text-green-800">Login Form</p>
      </FormModal>
    </>
  );
}
