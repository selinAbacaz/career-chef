import { basicQuestions } from "../questions";
import { create } from "zustand";
import type { QuestionAnswers } from "../interfaces/question-types";

interface QuestionStore {
  basicQAs: QuestionAnswers;
  detailedQAs: QuestionAnswers;
  updateBasicQAs: (newQAs: QuestionAnswers) => void;
  updateDetailedQAs: (newQAs: QuestionAnswers) => void;
}

const basicQuesitonsDefault: QuestionAnswers = Object.fromEntries(
  basicQuestions.map(({ id, defaultAnswer }) => [id, defaultAnswer]),
);

export const useQuestionStore = create<QuestionStore>((set) => ({
  basicQAs: basicQuesitonsDefault,
  detailedQAs: {},
  updateBasicQAs: (newQAs) => {
    set({ basicQAs: newQAs });
  },
  updateDetailedQAs: (newQAs) => {
    set({ detailedQAs: newQAs });
  },
}));
