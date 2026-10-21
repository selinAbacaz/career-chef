import { Button } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";
import type { QuestionAnswers } from "@utils/interfaces/question-types";
import type { JSX } from "react";
import "@css/components/QuestionTemplate.css";

interface QuestionTemplateProps {
  questionElements: JSX.Element[];
  form: UseFormReturnType<QuestionAnswers, QuestionAnswers, undefined>;
  updateQAs: (newQAs: QuestionAnswers) => void;
}

export function QuestionTemplate({
  questionElements,
  form,
  updateQAs,
}: QuestionTemplateProps) {
  return (
    <form onSubmit={form.onSubmit(updateQAs)} className="question-form">
      {questionElements.map((element) => element)}
      <div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
