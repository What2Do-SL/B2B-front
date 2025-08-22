/**Utilities & Configuration */
// Generic utilities

// Helper function to parse MongoDB date format
export const parseMongoDate = (mongoDate: any) => {
  if (mongoDate?.$date?.$numberLong) {
    return new Date(parseInt(mongoDate.$date.$numberLong));
  }
  if (mongoDate instanceof Date) {
    return mongoDate;
  }
  return new Date(mongoDate);
};

// Helper function to format date consistently
export const formatDate = (date: any) => {
  try {
    const parsedDate = parseMongoDate(date);
    return parsedDate.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "Fecha inválida";
  }
};

/**
 * Converts MongoDB $numberDouble format to string
 */
export function formatScore(
  score: { $numberDouble: string } | string | number
): string {
  if (typeof score === "string") return score;
  if (typeof score === "number") return score.toString();
  if (score && typeof score === "object" && "$numberDouble" in score) {
    return score.$numberDouble;
  }
  return "0";
}

/**
 * Translates confidence levels to Spanish
 */
export function formatConfidenceLevel(level: string): string {
  const translations: Record<string, string> = {
    high: "Alta",
    medium: "Media",
    low: "Baja",
  };

  return translations[level.toLowerCase()] || level;
}

/**
 * Splits text by periods and returns array of sentences
 * Each sentence is trimmed and has period added back
 */
export function splitBySentences(text: string): string[] {
  return text
    .split('. ')
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length > 0)
    .map(sentence => sentence.endsWith('.') ? sentence : `${sentence}.`);
}