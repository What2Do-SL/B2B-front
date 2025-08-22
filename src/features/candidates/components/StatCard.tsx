import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  className?: string;
}

export default function StatCard({ 
  icon, 
  label, 
  value, 
  className = "" 
}: StatCardProps) {
  return (
    <div className={`bg-white p-4 rounded-sm border border-gray-200 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      <p className="text-2xl font-bold text-green-900">
        {value}
      </p>
    </div>
  );
}