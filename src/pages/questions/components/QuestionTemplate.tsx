import { Button } from "@mantine/core";
import { useQuestionStore } from "@utils/zustand/question-store";
import type { UseFormReturnType } from "@mantine/form";
import type { QuestionAnswers } from "@utils/interfaces/question-types";
import type { JSX } from "react";
import "@css/components/QuestionTemplate.css";

interface QuestionTemplateProps {
  questionElements: JSX.Element[];
  form: UseFormReturnType<QuestionAnswers, QuestionAnswers, undefined>;
}

export function QuestionTemplate({
  questionElements,
  form,
}: QuestionTemplateProps) {
  const updateBasicQAs = useQuestionStore((state) => state.updateBasicQAs);

  return (
    <form onSubmit={form.onSubmit(updateBasicQAs)} className="question-form">
      {questionElements.map((element) => element)}
      <div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
