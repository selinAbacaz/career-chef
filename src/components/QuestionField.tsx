import { Group, Radio, RadioGroup, Slider, TextInput } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";
import type {
  Question,
  QuestionAnswers,
} from "@utils/interfaces/question-types";
import type { JSX } from "react";

interface QuestionFieldProps {
  question: Question;
  form: UseFormReturnType<QuestionAnswers, QuestionAnswers, undefined>;
  fieldName: string;
}

export function QuestionField({
  question,
  form,
  fieldName,
}: QuestionFieldProps) {
  let newElement: JSX.Element;
  const commonProps = {
    ...form.getInputProps(fieldName),
  };

  switch (question.type) {
    case "input":
      newElement = (
        <TextInput
          key={form.key(fieldName)}
          {...question.props}
          {...commonProps}
        />
      );
      break;
    case "slider":
      newElement = (
        <Slider
          key={form.key(fieldName)}
          {...question.props}
          {...commonProps}
        />
      );
      break;
    case "radio":
      newElement = (
        <RadioGroup
          key={form.key(fieldName)}
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
      newElement = <div>Question type not found!</div>;
  }

  return newElement;
}
