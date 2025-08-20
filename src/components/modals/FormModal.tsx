"use client";

import BaseModal from "./BaseModal";
import { RiCloseLargeLine } from "react-icons/ri";
import { FormModalProps } from "@/types/ui";

export default function FormModal({
  isOpen,
  onClose,
  title,
  children,
  variant = "beige",
  size = "md",
  showCloseButton = true,
}: FormModalProps) {
  const variantStyles = {
    beige: {
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      border: "border-amber-200/50",
      titleColor: "text-green-900",
      closeColor: "text-amber-600 hover:text-amber-800",
      shadow: "shadow-amber-200/20",
    },
    green: {
      bg: "bg-gradient-to-r from-green-950 via-green-800 to-green-600",
      border: "",
      titleColor: "text-white",
      closeColor: "text-green-200 hover:text-white",
      shadow: "shadow-green-900/40",
    },
  };

  const styles = variantStyles[variant];

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} size={size}>
      <div
        className={`
        ${styles.bg} 
        ${styles.border && "border-2"} 
        ${styles.border}
        rounded-sm
        shadow-2xl 
        ${styles.shadow}
        overflow-hidden
        relative
      `}
      >
        {/* Decorative geometric shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <div
            className={`w-16 h-16 ${
              variant === "beige" ? "bg-amber-200" : "bg-green-200"
            } transform rotate-12 absolute top-4 right-4`}
          />
          <div
            className={`w-12 h-12 ${
              variant === "beige" ? "bg-orange-300" : "bg-green-100"
            }  transform -rotate-12 absolute top-8 right-12`}
          />
          <div
            className={`w-8 h-8 ${
              variant === "beige" ? "bg-amber-400" : "bg-green-300"
            } absolute top-16 right-8`}
          />
        </div>

        {/* Header */}
        <div
          className={`relative px-8 py-6 border-b ${
            variant === "green" ? "border-green-400/30" : "border-current/10"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className={`text-2xl font-semibold ${styles.titleColor}`}>
              {title}
            </h2>
            {showCloseButton && (
              <button
                onClick={onClose}
                className={`
                  p-2 transition-colors
                  ${styles.closeColor}
                  hover:bg-current/10
                  cursor-pointer
                `}
              >
                <RiCloseLargeLine size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative px-8 py-6 max-h-[60vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </BaseModal>
  );
}
