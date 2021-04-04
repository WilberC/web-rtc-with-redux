import React from "react";
import { TextNote } from "./typography";

export function VideoCard({ thumbnail, alt, correctAnswers, incorrectAnswers, createdAt }) {
  return (
    <div className="grid auto-rows-min">
      <div className="cursor-pointer">
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
      <TextNote className="auto-rows-auto">created at: { createdAt || "___" }</TextNote>
    </div>
  );
}