import React, { useState, useEffect } from 'react';
// components

import Button from '../button/Button';
import QuestionList from '../questionList/QuestionList';
// styles
import './Capitals.css';

import postData from '../../Api';
import { randomInteger } from '../../utils/utils';

import { useQuizQuestions } from '../../hooks/useQuizQuestions';

// eslint-disable-next-line react/prop-types
function Capitals({ onTryAgain }) {
  const [result, setResult] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({
    data: {},
    index: 0,
  });
  const { questions, loading } = useQuizQuestions({});

  useEffect(() => {
    setCurrentQuestion({
      data: { ...questions[0] },
      index: 0,
    });
  }, [questions]);

  const nextQustion = () => {
    const nextQustionIndex = currentQuestion.index + 1;
    setCurrentQuestion({
      data: { ...questions[nextQustionIndex] },
      index: nextQustionIndex,
    });
  };

  const onAnswer = (answer) => {
    console.log(answer);
  };

  return (
    <div className="capitals-block">
      <h2 className="capitals__label font-poppins">Capitals Quiz</h2>
      <div
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        className="game-board"
      >
        <div
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Button
            variant="outlined"
            className="game__buttons game__buttons_home font-poppins"
            onClick={() => onTryAgain()}
          >
            Home
          </Button>
          <span className="game__record font-poppins">
            Record:&nbsp;
            {localStorage.getItem('record-capitals') || 0}
          </span>
        </div>
        <span className="game__question-counter font-poppins">
          Question&nbsp;
          {currentQuestion.data.index ? currentQuestion.data.index + 1 : 1}
          &nbsp;is 10
        </span>
        <span className="game__quiz font-poppins">
          {currentQuestion.data.question ?? ''}
        </span>
        <QuestionList currentQuestion={currentQuestion} onAnswer={onAnswer} />
      </div>
    </div>
  );
}

export default Capitals;
