import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { PiSealCheckDuotone } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";

type MatchingStatus = "completed" | "empty";

interface MatchingStatusCardProps {
  matchingStatus: MatchingStatus;
  className?: string;
}

export default function MatchingStatusCard({ 
  matchingStatus,
  className = "" 
}: MatchingStatusCardProps) {
  
  if (matchingStatus === "completed") {
    return (
      <div className={`bg-white p-4 rounded-sm border border-gray-200 ${className}`}>
        <div className="flex items-center gap-2 mb-2">
          <TbDeviceDesktopAnalytics size={16} className="text-green-600" />
          <span className="text-sm font-medium text-gray-600">
            Matching Status
          </span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <PiSealCheckDuotone size={24} className="text-green-400" />
          <p className="text-2xl font-bold text-gray-800">
            Análisis disponible
          </p>
        </div>
      </div>
    );
  }

  // matchingStatus === "empty"
  return (
    <div className={`bg-white p-4 rounded-sm border border-gray-200 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <TbDeviceDesktopAnalytics size={16} className="text-red-600" />
        <span className="text-sm font-medium text-gray-600">
          Matching Status
        </span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <AiFillCloseSquare size={24} className="text-red-400" />
        <p className="text-2xl font-bold text-gray-800">
          Análisis fallido
        </p>
      </div>
    </div>
  );
}