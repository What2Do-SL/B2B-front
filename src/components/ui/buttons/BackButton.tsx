"use client";

import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function BackButton({ 
  label = "Volver", 
  onClick,
  className = "" 
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back(); // Default: go back in browser history
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 
        text-green-800 hover:scale-110 hover:text-beige
        transition-transform duration-200
        text-md font-medium cursor-pointer
        ${className}
      `}
    >
      <FaArrowLeft size={16} />
      {label}
    </button>
  );
}