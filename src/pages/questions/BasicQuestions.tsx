import { Button } from "@mantine/core";
import { useQuestionForm } from "@utils/custom-hooks/useQuestionForm";
import { basicQuestions } from "@utils/questions";
import { useQuestionStore } from "@utils/zustand/question-store";

export function BasicQuestions() {
  const updateBasicQAs = useQuestionStore((state) => state.updateBasicQAs);
  const { elements, form } = useQuestionForm(basicQuestions);

  return (
    <form className="mt-20" onSubmit={form.onSubmit(updateBasicQAs)}>
      {elements.map((element) => element)}
      <Button type="submit">Submit</Button>
    </form>
  );
}
