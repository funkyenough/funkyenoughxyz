// Function to convert ISO date to custom format  (YYYY/MM/DD)
export const formatDate = (isoDate: string | number | Date) => {
  const dateObj = new Date(isoDate);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};
