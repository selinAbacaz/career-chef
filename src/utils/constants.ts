import {
  BasicQuestions,
  DetailedQuestions,
  HomePage,
  ResultsPage,
} from "@pages";

export const PAGES = {
  home: { id: "page-0", name: "Home", element: HomePage },
  basic: { id: "page-1", name: "Basic", element: BasicQuestions },
  detailed: { id: "page-2", name: "Detailed", element: DetailedQuestions },
  results: { id: "page-3", name: "Results", element: ResultsPage },
};
