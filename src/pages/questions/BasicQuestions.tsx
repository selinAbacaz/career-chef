import { useQuestionForm } from "@utils/custom-hooks/useQuestionForm";
import { basicQuestions } from "@utils/questions";
import { QuestionTemplate } from "./components/QuestionTemplate";
import banner from "@assets/images/question-banner-1.png";
import "@css/pages/Questions.css";
import { useQuestionStore } from "@utils/zustand/question-store";

const bqBannerWords = [
  "Answer Truthfully and Have Fun !",
  "Answer Truthfully and Have a Snack !",
];

export function BasicQuestions() {
  const updateBasicQAs = useQuestionStore((state) => state.updateBasicQAs);
  const { elements, form } = useQuestionForm(basicQuestions);

  return (
    <div className="questions-main">
      <section
        className="banner-section"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {bqBannerWords.map((word, index) => (
          <div key={index} className="banner-boxes">
            {word}
          </div>
        ))}
      </section>
      <section className="questions-form">
        <QuestionTemplate
          questionElements={elements}
          form={form}
          updateQAs={updateBasicQAs}
        />
      </section>
    </div>
  );
}
