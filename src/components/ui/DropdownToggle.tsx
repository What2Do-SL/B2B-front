import { getIcon } from "@/lib/icons";

interface DropdownToggleProps {
  onClick: () => void;
  isOpen: boolean;
  title: string;
  subtitle: any;
}

export default function DropdownToggle({
  onClick,
  isOpen,
  title,
  subtitle,
}: DropdownToggleProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <button
          onClick={onClick}
          className="flex items-center gap-2 text-left"
        >
          <h2 className="text-2xl font-bold text-green-800 hover:text-green-500 cursor-pointer">
            {title} 
          </h2>
          <div
            className={`transform transition-transform cursor-pointer ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {getIcon("toggle", { size: 24, className: "text-green-800" })}
          </div>
        </button>
        {isOpen && (
          <p className="text-green-900 mt-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
