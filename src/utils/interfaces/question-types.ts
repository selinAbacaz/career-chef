import type {
  RadioGroupProps,
  SliderProps,
  TextInputProps,
} from "@mantine/core";

export interface BaseQuestion {
  id: string;
  text: string;
}

export interface InputQuestion extends BaseQuestion {
  type: "input";
  defaultAnswer: string;
  props?: TextInputProps;
}

export interface SliderQuestion extends BaseQuestion {
  type: "slider";
  defaultAnswer: number;
  props?: SliderProps;
}

export interface RadioQuestion extends BaseQuestion {
  type: "radio";
  defaultAnswer: string;
  radioOptions: string[];
  props?: Omit<RadioGroupProps, "children">;
}

export type Question = InputQuestion | SliderQuestion | RadioQuestion;
export type QuestionAnswers = { [key: string]: string | number };
