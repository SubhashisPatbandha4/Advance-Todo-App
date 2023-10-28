export const generateRandomColorClass = () => {
  const colors = [
    "table-primary",

    "table-success",

    "table-warning",
    "table-info",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
