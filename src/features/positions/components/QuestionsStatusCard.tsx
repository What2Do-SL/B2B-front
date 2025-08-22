import { getIcon } from "@/lib/icons";

interface QuestionsStatusCardProps {
  generatedQuestions: any;
}

export default function QuestionsStatusCard({
  generatedQuestions,
}: QuestionsStatusCardProps) {
  // Helper function to get the appropriate icon and status for generated questions
  const getQuestionsStatus = (questions: any) => {
    if (!questions) {
      return {
        icon: getIcon("creation-pending", { className: "text-gray-500" }),
        status: "Pendiente",
      };
    }

    // Check if questions object has sections with actual questions
    const hasSections =
      questions.sections &&
      Array.isArray(questions.sections) &&
      questions.sections.length > 0;
    const hasQuestions =
      hasSections &&
      questions.sections.some(
        (section: any) =>
          section.questions &&
          Array.isArray(section.questions) &&
          section.questions.length > 0
      );

    if (hasQuestions) {
      return {
        icon: getIcon("analysis-success", { className: "text-green-600" }),
        status: "Generadas",
      };
    } else {
      return {
        icon: getIcon("analysis-fail", { className: "text-red-500" }),
        status: "Sin contenido",
      };
    }
  };

  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-2">
        {getIcon("question")}
        <span className="text-sm font-medium text-gray-600">
          Preguntas generadas
        </span>
      </div>
      {(() => {
        const questionStatus = getQuestionsStatus(generatedQuestions);
        return (
          <div className="flex items-center gap-2">
            {questionStatus.icon}
            <p className="text-lg font-bold text-gray-800">
              {questionStatus.status}
            </p>
          </div>
        );
      })()}
    </div>
  );
}
