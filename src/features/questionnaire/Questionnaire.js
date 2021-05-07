import React, { useEffect, useState } from "react";
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import { useCurrentUser } from "../../utils/useCurrentUser";
import { TextNote, Title } from "../../components/typography";
import { ButtonGhost } from "../../components/buttons";
import { useHistory } from "react-router-dom";
import { VideoCard } from "../../components/videoCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionnaire, selectQuestionnaireData } from "./questionnaireSlice";

export function Questionnaire() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userToken, userId } = useCurrentUser()
  const [numberOfQuestions, setNumberOfQuestions] = useState(6)
  const { data: questionnaires } = useSelector(selectQuestionnaireData)

  useEffect(() => {
    dispatch(fetchQuestionnaire({ userToken, userId }))
  }, [dispatch, userToken, userId])

  return (
    <section className="flex flex-col justify-center items-center my-auto h-full">
      <Title className="text-center mt-8 mb-2">Roll Dice</Title>
      <TextNote className="text-center mb-4">click dice to roll</TextNote>
      <ReactDice
        numDice={ 1 }
        defaultRoll={ numberOfQuestions }
        faceColor="#4209460"
        dotColor="#2031104"
        dieSize={ 200 }
        rollDone={ num => setNumberOfQuestions(num) }
      />
      <ButtonGhost onClick={ () => history.push("/answer") }>
        Answer { numberOfQuestions } questions
      </ButtonGhost>
      <div className="mt-4 mb-2 w-full flex-grow grid grid-cols-3 auto-rows-auto gap-4 overflow-y-auto p-8">
        { questionnaires.map(({ id, attributes: questionnaire }) => (
          <VideoCard
            key={ id }
            questionnaireId={ id }
            correctAnswers={ questionnaire.correctAnswers }
            incorrectAnswers={ questionnaire.incorrectAnswers }
            createdAt={ questionnaire.createdAt }
            thumbnail={ "https://designshack.net/wp-content/uploads/placeholder-image.png" }
            alt={ "abc" }
          />
        )) }
      </div>
    </section>
  );
}