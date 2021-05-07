import React from "react";
import { useParams } from "react-router-dom";

export function QuestionnaireDetail() {
  const { id: questionnaireId } = useParams()
  console.log(questionnaireId)
  return (
    <section>
      a
    </section>
  );
}