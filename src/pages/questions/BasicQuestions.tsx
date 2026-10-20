import { useQuestionForm } from "@utils/custom-hooks/useQuestionForm";
import { basicQuestions } from "@utils/questions";
import { QuestionTemplate } from "./components/QuestionTemplate";
import "@css/pages/Questions.css";

export function BasicQuestions() {
  const { elements, form } = useQuestionForm(basicQuestions);

  return (
    <section className="questions-main">
      <QuestionTemplate questionElements={elements} form={form} />
    </section>
  );
}
