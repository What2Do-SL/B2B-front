import { IoGridSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa6";

interface ViewToggleProps {
  currentView: "cards" | "list";
  onToggle: (view: "cards" | "list") => void;
  className?: string;
}

export default function ViewToggle({
  currentView,
  onToggle,
  className = "",
}: ViewToggleProps) {
  return (
    <div
      className={`inline-flex rounded-sm border border-green-50 bg-green-50 p-1 ${className}`}
    >
      <button
        onClick={() => onToggle("cards")}
        className={`
          inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-sm transition-colors cursor-pointer
          ${
            currentView === "cards"
              ? "bg-green-100 text-green-900 shadow-sm"
              : "text-green-600 hover:text-green-900 hover:scale-110"
          }
        `}
      >
        <IoGridSharp size={16} />
      </button>
      <button
        onClick={() => onToggle("list")}
        className={`
          inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-sm transition-colors cursor-pointer
          ${
            currentView === "list"
              ? "bg-green-100 text-green-900 shadow-sm"
              : "text-green-600 hover:text-green-900 hover:scale-110"
          }
        `}
      >
        <FaList size={16} />
      </button>
    </div>
  );
}
