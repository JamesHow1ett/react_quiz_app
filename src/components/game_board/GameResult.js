import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

import FinalImg from '../../assets/final-img.png';

function GameResult({ resultScore, onTryAgain, onNewGame }) {
  const resultMessage = resultScore > 1 ? 'answers' : 'answer';

  return (
    <div className="game__result">
      <div className="grac-image-container">
        <img src={FinalImg} alt="mageGrac" />
      </div>
      <div className="result-text">
        <span className="result-text__title">Results</span>
        <span className="result-text__text">
          You got
          <span className="result-text__score">
            {' '}
            {resultScore}
            {' '}
          </span>
          correct
          {' '}
          {resultMessage}
        </span>
      </div>
      <div className="try-again">
        <Button variant="depressed" color="purple" onClick={() => onNewGame()}>
          Play New Game
        </Button>
        <Button variant="outlined" color="purple" onClick={() => onTryAgain()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}

GameResult.propTypes = {
  resultScore: PropTypes.number,
  onTryAgain: PropTypes.func.isRequired,
  onNewGame: PropTypes.func.isRequired,
};

GameResult.defaultProps = {
  resultScore: 0,
};

export default GameResult;
