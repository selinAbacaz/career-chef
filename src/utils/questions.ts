import type { Question } from "./interfaces/question-types";

export const basicQuestions: Question[] = [
  {
    id: "bq1",
    text: "What is most important to you in a job?",
    defaultAnswer: "",
    type: "radio",
    radioOptions: [
      "Salary",
      "Work Life Balance",
      "Growth",
      "Helping others",
      "Making a Difference",
    ],
  },
  {
    id: "bq2",
    text: "Do you prefer working solo or with others?",
    defaultAnswer: "",
    type: "radio",
    radioOptions: ["Solo", "With Others"],
  },
  {
    id: "bq3",
    text: "What is your favorite subject in school?",
    defaultAnswer: "",
    type: "input",
  },
  {
    id: "bq4",
    text: "What type of workplace suits you?",
    defaultAnswer: "",
    type: "radio",
    radioOptions: ["Fast-Paced", "Collaborative", "Structured", "Flexible"],
  },
  {
    id: "bq5",
    text: "On a scale of 1-10, how much do you like working with technology?",
    defaultAnswer: 0,
    type: "slider",
    props: { max: 10 },
  },
  {
    id: "bq6",
    text: "On a scale of 1-10, how much do you enjoy doing art?",
    defaultAnswer: 0,
    type: "slider",
    props: { max: 10 },
  },
  {
    id: "bq7",
    text: "Do you prefer working indoors or outdoors?",
    defaultAnswer: "",
    type: "radio",
    radioOptions: ["Indoors", "Outdoors"],
  },
  {
    id: "bq8",
    text: "Do you enjoy coming up with new ideas and solutions?",
    defaultAnswer: "",
    type: "radio",
    radioOptions: ["Yes", "No"],
  },
  {
    id: "bq9",
    text: "Do you like tasks that vary each day, or stay the same?",
    defaultAnswer: "",
    type: "radio",
    radioOptions: ["I like tasks that vary", "I like tasks that stay the same"],
  },
  {
    id: "bq10",
    text: "How much education do you plan to pursue? (High School Diploma, Bachelors, Masters, Doctorate)",
    defaultAnswer: "",
    type: "input",
  },
];

export const detailedQuetions: Question[] = [];
