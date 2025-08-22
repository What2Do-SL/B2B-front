import { EmptyStateProps } from "@/types/ui";

export default function EmptyState({
  title,
  subtitle,
  description,
  icon,
}: EmptyStateProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            {title}
          </h2>
        </div>
      </div>
      <div className="text-center py-6">
        <div className="text-gray-400 mb-4">{icon}</div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">{subtitle}</h3>
        <p className="text-gray-500 mb-6">{description}</p>
      </div>{" "}
    </div>
  );
}
