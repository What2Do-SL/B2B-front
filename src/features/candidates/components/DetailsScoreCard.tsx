// features/candidates/components/DetailScoreCard.tsx
import { ReactNode } from 'react';
import GradientText from '@/components/ui/GradientText';
import { formatScore, splitBySentences } from '@/lib/utils';

interface DetailScoreCardProps {
  icon: ReactNode;
  label: string;
  score: { $numberDouble: string } | string | number;
  reasoning: string;
  className?: string;
  showGradient?: boolean;
}

export default function DetailScoreCard({ 
  icon, 
  label, 
  score, 
  reasoning,
  className = "",
  showGradient = true
}: DetailScoreCardProps) {
  const displayValue = formatScore(score) + '%';
  const sentences = splitBySentences(reasoning);
  
  return (
    <div className={`flex gap-1 ${className}`}>
      {/* Score Section */}
      <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col max-w-64 min-w-48">
        <div className="flex flex-col items-center gap-2 mb-2">
          {icon}
          <span className="text-xl font-bold text-green-800 text-center">
            {label}:
          </span>
        </div>
        <div className="text-3xl font-bold">
          {showGradient ? (
            <GradientText>{displayValue}</GradientText>
          ) : (
            <span>{displayValue}</span>
          )}
        </div>
      </div>

      {/* Reasoning Section */}
      <div className="bg-white p-6 rounded-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-green-900 mb-4">
          Razonamiento
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {sentences.map((sentence, index) => (
            <p key={index} className="text-green-900">
              {sentence}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}