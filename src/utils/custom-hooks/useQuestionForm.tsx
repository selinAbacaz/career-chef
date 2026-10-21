import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useQuestionStore } from "@utils/zustand/question-store";
import type { Question } from "../interfaces/question-types";
import { useState, type JSX } from "react";
import "@css/components/QuestionTemplate.css";
import { QuestionField } from "@components";

export function useQuestionForm(questions: Question[]) {
  const basicQAs = useQuestionStore((state) => state.basicQAs);
  const [numAnswered, setNumAnswered] = useState<number>(0);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: basicQAs,
    onValuesChange: (values) => {
      let newNumAnswered = 0;
      for (const value of Object.values(values)) {
        if (value) newNumAnswered++;
      }
      setNumAnswered(newNumAnswered);
    },
  });

  const progressNum = (numAnswered / questions.length) * 100;
  let progressColor =
    progressNum < 50 ? "red" : progressNum < 100 ? "yellow" : "green";

  const elements: JSX.Element[] = questions.map((question, index) => {
    return (
      <Stack key={question.id}>
        <div className="question-labels">{`Question ${index + 1}: ${question.text}`}</div>
        <QuestionField
          question={question}
          form={form}
          fieldName={question.id}
        />
      </Stack>
    );
  });

  return { elements, form, numAnswered, progressNum, progressColor };
}
