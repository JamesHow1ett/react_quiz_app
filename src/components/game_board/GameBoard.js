import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';
import QuestionList from './QuestionList';
import GameResult from './GameResult';

import './GameBoard.css';

import { useQuizQuestions } from '../../hooks/useQuizQuestions';
import { converUnicode } from './utils/helpers';
import { hasNextItem } from '../../utils/utils';

function GameBoard({ gameOptions, onNewGame }) {
  const [answerCorect, setAnswerCorect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(0);
  const [answer, setAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState({
    data: {},
    index: 0,
  });
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const { questions, loading, fetchData } = useQuizQuestions(gameOptions);

  useEffect(() => {
    setCurrentQuestion({
      data: { ...questions[0] },
      index: 0,
    });
  }, [questions]);

  const setDefaultState = () => {
    setAnswerCorect(false);
    setShowResult(false);
    setResult(0);
    setCurrentQuestionNumber(1);
    setAnswer('');
    setCurrentQuestion({
      data: {},
      index: 0,
    });
  };

  const handleTryAgain = () => {
    setDefaultState();
    fetchData(gameOptions);
  };

  const handleNewGame = () => {
    setDefaultState();
    onNewGame();
  };

  const nextQustion = () => {
    if (answerCorect) {
      if (hasNextItem(currentQuestion.index, questions)) {
        const nextQustionIndex = currentQuestion.index + 1;

        setCurrentQuestion({
          data: { ...questions[nextQustionIndex] },
          index: nextQustionIndex,
        });
        setCurrentQuestionNumber(nextQustionIndex + 1);

        setAnswer('');
        setAnswerCorect(false);
      } else {
        setShowResult(true);
      }
    }
  };

  const onAnswer = (value) => {
    setAnswer(value);
    const isGetPoint = value === currentQuestion.data.correct_answer;
    setAnswerCorect(isGetPoint);
    setResult((prev) => prev + Number(isGetPoint));
  };

  return (
    <div className="capitals-block">
      <h2 className="capitals__label font-poppins">Capitals Quiz</h2>
      {loading
        ? (<div className="game-board">Loading...</div>)
        : (
          <div className="game-board">
            {showResult
              ? (
                <GameResult
                  resultScore={result}
                  onTryAgain={handleTryAgain}
                  onNewGame={handleNewGame}
                />
              )
              : (
                <>
                  <div className="game__header">
                    <Button
                      variant="outlined"
                      color="purple"
                      className="game__buttons game__buttons_home font-poppins"
                      onClick={() => handleNewGame()}
                    >
                      Home
                    </Button>
                    <span className="game__record font-poppins">
                      Record:&nbsp;
                      {/* FIXME */}
                      {localStorage.getItem('record-capitals') || 0}
                    </span>
                  </div>
                  <div className="game__question">
                    <span className="game__question-counter font-poppins">
                      Question&nbsp;
                      {currentQuestionNumber}
                  &nbsp;is 10
                    </span>
                    <span className="game__quiz font-poppins">
                      {converUnicode(currentQuestion.data.question ?? '')}
                    </span>
                  </div>
                  <QuestionList currentQuestion={currentQuestion} onAnswer={onAnswer} />
                  <div className="game__go-next">
                    {answer && (
                      (answerCorect && (<Button variant="depressed" color="orange" onClick={() => nextQustion()}>Next</Button>))
            || (<Button variant="depressed" color="orange" onClick={() => setShowResult(true)}>See Results</Button>))}
                  </div>
                </>
              )}
          </div>
        )}
    </div>
  );
}

GameBoard.propTypes = {
  // FIXME: set as required
  // eslint-disable-next-line react/require-default-props
  gameOptions: PropTypes.exact({
    amount: PropTypes.number,
    category: PropTypes.number,
    difficulty: PropTypes.string,
    type: PropTypes.string,
  }),
  onNewGame: PropTypes.func.isRequired,
};

export default GameBoard;
