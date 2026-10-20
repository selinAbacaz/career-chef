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
import { useState, type JSX } from "react";
import "@css/components/QuestionTemplate.css";

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

  const elements: JSX.Element[] = [];
  for (const [index, question] of questions.entries()) {
    let newElement: JSX.Element | null = null;
    const stateVarName = question.id;
    const commonProps = {
      ...form.getInputProps(stateVarName),
    };

    switch (question.type) {
      case "input":
        newElement = (
          <TextInput
            key={form.key(stateVarName)}
            {...question.props}
            {...commonProps}
          />
        );
        break;
      case "slider":
        newElement = (
          <Slider
            key={form.key(stateVarName)}
            {...question.props}
            {...commonProps}
          />
        );
        break;
      case "radio":
        newElement = (
          <RadioGroup
            key={form.key(stateVarName)}
            {...question.props}
            {...commonProps}
          >
            <Group gap={20}>
              {question.radioOptions.map((option, index) => (
                <Radio
                  key={index}
                  value={option.toLowerCase().trim()}
                  label={option}
                />
              ))}
            </Group>
          </RadioGroup>
        );
        break;
      default:
        break;
    }

    if (newElement) {
      const label = (
        <div className="question-labels">{`Question ${index + 1}: ${question.text}`}</div>
      );

      const wrappedElement = (
        <Stack key={question.id}>
          {label}
          {newElement}
        </Stack>
      );

      elements.push(wrappedElement);
    }
  }

  return { elements, form, numAnswered, progressNum, progressColor };
}
