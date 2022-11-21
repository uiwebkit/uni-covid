export const searchValue = (items: string[], value: string): string[] => {
  return items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
};
