import Header from "@/components/layout/header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    {
      label: "Sobre nosotros",
      bgColor: "var(--color-green-800)",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "/" },
        { label: "Careers", ariaLabel: "About Careers", href: "/" },
      ],
    },
    {
      label: "Contacto",
      bgColor: "var(--color-green-800)",
      textColor: "#fff",
      links: [
        { label: "Correo", ariaLabel: "Email us", href: "/" },
        { label: "Instagram", ariaLabel: "Instagram", href: "/" },
        { label: "TikTok", ariaLabel: "TikTok", href: "/" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "/" },
      ],
    },
  ];

  return (
    <>
      <Header
        logo="/main-logo.png"
        logoAlt="W2D"
        baseColor="var(--color-green-900)"
        menuColor="var(--color-green-200)"
        buttonBgColor="var(--color-green-200)"
        buttonTextColor="var(--color-green-950)"
        ease="power3.out"
        items={items}
      />
      {children}
    </>
  );
}