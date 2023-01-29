import create from "zustand";

export const useGlobal = create((set) => ({
  selectedCategory: "",
  handleSelectedCategory: (newCategory) =>
    set({ selectedCategory: newCategory }),
}));
