export const useDate = () => {
  const date = new Date();
  const year = date.getFullYear();

  return {
    year
  };
};