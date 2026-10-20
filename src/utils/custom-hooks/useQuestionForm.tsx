import {
  Group,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  TextInput,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useQuestionStore } from "@utils/zustand/question-store";
import type { Question } from "../interfaces/question-types";
import type { JSX } from "react";

export function useQuestionForm(questions: Question[]) {
  const basicQAs = useQuestionStore((state) => state.basicQAs);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: basicQAs,
  });

  const elements: JSX.Element[] = [];

  for (const question of questions) {
    let newElement: JSX.Element | null = null;
    const stateVarName = question.id;

    switch (question.type) {
      case "input":
        newElement = (
          <TextInput
            {...question.props}
            label={question.text}
            key={form.key(stateVarName)}
            {...form.getInputProps(stateVarName)}
          />
        );
        break;
      case "slider":
        newElement = (
          <Stack>
            <Text size="sm" fw={500}>
              {question.text}
            </Text>
            <Slider
              {...question.props}
              key={form.key(stateVarName)}
              {...form.getInputProps(stateVarName)}
            />
          </Stack>
        );
        break;
      case "radio":
        newElement = (
          <RadioGroup
            {...question.props}
            label={question.text}
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

    if (newElement) elements.push(newElement);
  }

  return { elements, form };
}
