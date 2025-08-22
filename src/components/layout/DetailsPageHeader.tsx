interface DetailsPageHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function DetailsPageHeader({
  icon,
  title,
  subtitle,
}: DetailsPageHeaderProps) {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-green-100 rounded-sm">{icon}</div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-900">
            {title}
          </h1>
          <p className="text-lg text-green-800">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
