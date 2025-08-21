import { EmptyStateProps } from "@/types/ui";

export default function EmptyState({
  title,
  description,
  icon,
}: EmptyStateProps) {
  return (
    <div className="text-center py-6">
      <div className="text-gray-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-600 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 mb-6">
        {description}
      </p>
    </div>
  );
}
