import { create } from "zustand";
import type { QuestionAnswers } from "../interfaces/question-types";

interface QuestionStore {
  basicQAs: QuestionAnswers;
  detailedQAs: QuestionAnswers;
  updateBasicQAs: (newQAs: QuestionAnswers) => void;
  updateDetailedQAs: (newQAs: QuestionAnswers) => void;
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  basicQAs: {},
  detailedQAs: {},
  updateBasicQAs: (newQAs) => {
    set({ basicQAs: newQAs });
  },
  updateDetailedQAs: (newQAs) => {
    set({ detailedQAs: newQAs });
  },
}));
