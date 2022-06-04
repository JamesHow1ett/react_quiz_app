import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Storage from '../../services/Storage';
import { useQuizQuestions } from '../../hooks/useQuizQuestions';
import { useGameRecord } from '../../hooks/useGameRecord';
import { converUnicode } from './utils/helpers';
import { hasNextItem, createStoregeKey } from '../../utils/utils';

import Button from '../button/Button';
import RoundCountdown from '../countdown/Countdown';
import QuestionList from './QuestionList';
import GameResult from './GameResult';

import './GameBoard.css';

function GameBoard({ gameOptions, countdownCounter, onNewGame }) {
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
  const { gameRecord, handleGetGameRecord } = useGameRecord(createStoregeKey(gameOptions));

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
    Storage.saveResults(createStoregeKey(gameOptions), result);
    setDefaultState();
    fetchData(gameOptions);
    handleGetGameRecord();
  };

  const handleNewGame = () => {
    Storage.saveResults(createStoregeKey(gameOptions), result);
    setDefaultState();
    onNewGame();
    handleGetGameRecord();
  };

  const handleGoSettings = () => {
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

  const countdownCallback = () => {
    setShowResult(true);
  };

  return (
    <div className="capitals-block">
      <h2 className="capitals__label font-poppins">Quiz App</h2>
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
                      onClick={handleGoSettings}
                    >
                      Home
                    </Button>
                    {!answer && (
                    <RoundCountdown
                      counter={countdownCounter}
                      isAnswered={Boolean(answer)}
                      onCallback={countdownCallback}
                    />
                    )}
                    <span className="game__record font-poppins">
                      Record:&nbsp;
                      {gameRecord}
                    </span>
                  </div>
                  <div className="game__question">
                    <span className="game__question-counter font-poppins">
                      Question
                      {' '}
                      {currentQuestionNumber}
                      {' '}
                      is
                      {' '}
                      {gameOptions.amount}
                    </span>
                    <span className="game__quiz font-poppins">
                      {converUnicode(currentQuestion.data.question ?? '')}
                    </span>
                  </div>
                  <QuestionList currentQuestion={currentQuestion} onAnswer={onAnswer} />
                  <div className="game__go-next">
                    {answer && (
                      (answerCorect && (
                      <Button
                        variant="depressed"
                        color="orange"
                        onClick={() => nextQustion()}
                      >
                        Next
                      </Button>
                      ))
                      || (
                      <Button
                        variant="depressed"
                        color="orange"
                        onClick={() => setShowResult(true)}
                      >
                        See Results
                      </Button>
                      ))}
                  </div>
                </>
              )}
          </div>
        )}
    </div>
  );
}

GameBoard.propTypes = {
  gameOptions: PropTypes.exact({
    amount: PropTypes.number,
    category: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    difficulty: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  countdownCounter: PropTypes.number.isRequired,
  onNewGame: PropTypes.func.isRequired,
};

export default GameBoard;
