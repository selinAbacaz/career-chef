import { PAGES } from "../constants";
import type { JSX } from "react/jsx-runtime";
import { create } from "zustand";

interface GeneralStore {
  currentPage: () => JSX.Element | null;
  setCurrentPage: (newPage: () => JSX.Element | null) => void;
}

export const useGeneralStore = create<GeneralStore>((set) => ({
  currentPage: PAGES.home,
  setCurrentPage: (newPage) => {
    set({ currentPage: newPage });
  },
}));
