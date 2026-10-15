import { PAGES } from "../constants";
import type { JSX } from "react/jsx-runtime";
import { create } from "zustand";

interface GeneralStore {
  currentPage: keyof typeof PAGES;
  currentElement: () => JSX.Element | null;
  setCurrentPage: (newPage: keyof typeof PAGES) => void;
}

export const useGeneralStore = create<GeneralStore>((set) => ({
  currentPage: "home",
  currentElement: PAGES.home.element,
  setCurrentPage: (newPage) => {
    set({ currentPage: newPage, currentElement: PAGES[newPage].element });
  },
}));
