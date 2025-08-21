import { CreateCardProps } from "@/types/ui";
import { MdDomainAdd } from "react-icons/md";

/**
 * CreateCard component for creating new items.
 * Displays a plus icon and a label, with an optional description.
 * Clickable to trigger an action.
 */

export default function CreateCard({
  icon,
  label,
  description,
  onClick,
  className = '',
  style = {},
  aspectRatio = '100%',
}: CreateCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        ${className}
        bg-gradient-to-br from-green-100 to-green-200
        border-2 border-dashed border-green-400
        text-green-700
        rounded-sm
        w-[300px]
        max-w-full
        relative
        overflow-hidden
        cursor-pointer
        transition-all duration-200
        hover:scale-105
        hover:from-green-200
        hover:to-green-300
        hover:border-green-500
        flex items-center justify-center
      `}
      style={style}
    >
      <div style={{ paddingTop: aspectRatio }} />
      
      {/* Content */}
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6">
        {/* Plus Icon */}
        <div className="mb-4 p-4 bg-green-300/30 rounded-full">
          {icon}
        </div>
        
        {/* Text */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            {label}
          </h3>
          {description && (
            <p className="text-sm text-green-600 opacity-80">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}