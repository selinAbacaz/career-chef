import { basicQuestions } from "../questions";
import { create } from "zustand";

type QuestionAnswers = { [key: string]: string | number };

interface QuestionStore {
  basicQAs: QuestionAnswers;
  detailedQAs: QuestionAnswers;
  updateBasicQAs: (newQAs: QuestionAnswers) => void;
  updateDetailedQAs: (newQAs: QuestionAnswers) => void;
}

let basicQuesitonsDefault: QuestionAnswers = {};
basicQuestions.forEach(({ id, defaultAnswer }) => {
  basicQuesitonsDefault = { ...basicQuesitonsDefault, [id]: defaultAnswer };
});

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
