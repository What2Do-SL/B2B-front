interface DetailsCardProps {
  label: string;
  description: string;
}

export default function DetailsCard({ label, description }: DetailsCardProps) {
  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Description */}
      <div className="bg-white p-6 rounded-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-green-900 mb-4">{label}</h3>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
