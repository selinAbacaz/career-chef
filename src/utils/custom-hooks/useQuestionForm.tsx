import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { QuestionField } from "@components";
import type { Question } from "../interfaces/question-types";
import { useMemo, type JSX } from "react";
import "@css/components/QuestionTemplate.css";

export function useQuestionForm(questions: Question[]) {
  const defaultState = useMemo(() => {
    return Object.fromEntries(
      questions.map(({ id, defaultAnswer }) => [id, defaultAnswer]),
    );
  }, [questions]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: defaultState,
  });

  const elements: JSX.Element[] = questions.map((question, index) => (
    <Stack key={question.id}>
      <div className="question-labels">{`Question ${index + 1}: ${question.text}`}</div>
      <QuestionField question={question} form={form} fieldName={question.id} />
    </Stack>
  ));

  return { elements, form };
}
