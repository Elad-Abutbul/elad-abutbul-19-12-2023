export const localSorageService = {
  setItem: (key: string, value: string) => localStorage.setItem(key, value),

  getItem: (key: string) => localStorage.getItem(key),
};
