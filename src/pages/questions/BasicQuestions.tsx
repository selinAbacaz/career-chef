import { useQuestionForm } from "@utils/custom-hooks/useQuestionForm";
import { basicQuestions } from "@utils/questions";
import { QuestionTemplate } from "./components/QuestionTemplate";
import banner from "@assets/images/question-banner-1.png";
import "@css/pages/Questions.css";
import { Progress } from "@mantine/core";

const bqBannerWords = [
  "Answer Truthfully and Have Fun !",
  "Answer Truthfully and Have a Snack !",
];

export function BasicQuestions() {
  const { elements, form, progressNum, progressColor } =
    useQuestionForm(basicQuestions);

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
        <Progress
          value={progressNum}
          color={progressColor}
          size="xl"
          animated
        />
        <QuestionTemplate questionElements={elements} form={form} />
      </section>
    </div>
  );
}
