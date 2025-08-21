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
