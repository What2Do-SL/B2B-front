import { ReactNode } from 'react';
import GradientText from '@/components/ui/GradientText';
import { formatScore, formatConfidenceLevel } from '@/lib/utils';

interface ScoreCardProps {
  icon: ReactNode;
  label: string;
  score: { $numberDouble: string } | string | number;
  className?: string;
  showGradient?: boolean;
  isConfidenceLevel?: boolean;
}

export default function ScoreCard({ 
  icon, 
  label, 
  score, 
  className = "",
  showGradient = true,
  isConfidenceLevel = false
}: ScoreCardProps) {
  let displayValue: string;
  
  if (isConfidenceLevel) {
    displayValue = formatConfidenceLevel(score.toString());
  } else {
    displayValue = formatScore(score) + '%';
  }
  
  return (
    <div className={`bg-white p-4 rounded-sm border border-gray-200 flex justify-between w-full ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-2xl font-bold text-gray-800 whitespace-nowrap">
          {label}
        </span>
      </div>
      <div className="text-2xl font-bold">
        {showGradient ? (
          <GradientText>{displayValue}</GradientText>
        ) : (
          <span>{displayValue}</span>
        )}
      </div>
    </div>
  );
}