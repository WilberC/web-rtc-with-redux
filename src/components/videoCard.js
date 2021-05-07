import React from "react";
import { TextNote } from "./typography";
import { useHistory } from "react-router-dom";
import { FormatDate } from "../utils/formatDate";

export function VideoCard({ thumbnail, alt, correctAnswers, incorrectAnswers, createdAt, questionnaireId }) {
  const history = useHistory();

  return (
    <div className="grid auto-rows-min">
      <div className="cursor-pointer" onClick={ () => history.push(`/questionnaire/${ questionnaireId }`) }>
        <img
          className="object-cover rounded"
          alt={ alt }
          src={ thumbnail }
        />
      </div>
      <div className="auto-rows-auto flex justify-between">
        { !!(correctAnswers || incorrectAnswers) ?
          <>
            <span>Correct Answers: { correctAnswers }</span>
            <span>Incorrect Answers: { incorrectAnswers }</span>
          </> :
          <span>No Data</span>
        }
      </div>
      <TextNote className="auto-rows-auto">created at: { FormatDate(createdAt) || "___" }</TextNote>
    </div>
  );
}