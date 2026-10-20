import {
  Group,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useQuestionStore } from "@utils/zustand/question-store";
import type { Question } from "../interfaces/question-types";
import type { JSX } from "react";
import "@css/components/QuestionTemplate.css";

export function useQuestionForm(questions: Question[]) {
  const basicQAs = useQuestionStore((state) => state.basicQAs);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: basicQAs,
  });

  const elements: JSX.Element[] = [];

  for (const [index, question] of questions.entries()) {
    let newElement: JSX.Element | null = null;
    const stateVarName = question.id;

    const label = (
      <div className="question-labels">{`Question ${index + 1}: ${question.text}`}</div>
    );

    switch (question.type) {
      case "input":
        newElement = (
          <TextInput
            {...question.props}
            key={form.key(stateVarName)}
            {...form.getInputProps(stateVarName)}
          />
        );
        break;
      case "slider":
        newElement = (
          <Slider
            {...question.props}
            key={form.key(stateVarName)}
            {...form.getInputProps(stateVarName)}
          />
        );
        break;
      case "radio":
        newElement = (
          <RadioGroup
            {...question.props}
            key={form.key(stateVarName)}
            {...form.getInputProps(stateVarName)}
          >
            <Group gap={20}>
              {question.radioOptions.map((option) => (
                <Radio value={option.toLowerCase().trim()} label={option} />
              ))}
            </Group>
          </RadioGroup>
        );
        break;
      default:
        break;
    }

    if (newElement) {
      const wrappedElement = (
        <Stack>
          {label}
          {newElement}
        </Stack>
      );
      elements.push(wrappedElement);
    }
  }

  return { elements, form };
}
