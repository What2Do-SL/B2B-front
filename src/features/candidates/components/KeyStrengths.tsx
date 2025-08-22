interface KeyStrengthsProps {
  strengths: string[];
  title?: string;
  className?: string;
}

export default function KeyStrengths({ 
  strengths, 
  title = "Fortalezas Clave",
  className = "" 
}: KeyStrengthsProps) {
  return (
    <div className={`bg-white p-6 rounded-sm border border-gray-200 ${className}`}>
      <h3 className="text-lg font-semibold text-green-900 mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {strengths.map((strength, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-sm"
          >
            {strength}
          </span>
        ))}
      </div>
    </div>
  );
}