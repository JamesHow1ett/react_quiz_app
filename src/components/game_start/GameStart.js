import React from 'react';
import PropTypes from 'prop-types';

import GameStartForm from './GameStartForm';

import './GameStart.css';

function GameStart({ gameOptions, onSelectOptions }) {
  const handleGameStart = (options) => {
    onSelectOptions(options);
  };

  return (
    <div className="game-start">
      <div className="game-start font-poppins">
        <h1 className="game-start__label_h1 font-poppins">
          Welcome to the quiz
        </h1>
        <h6 className="game-start__label_discr font-poppins">
          Answer correctly to the questions
        </h6>
        <div className="game-start__buttots">
          <div>
            <span className="game-start__game-discr font-poppins">
              Choise your game
            </span>
          </div>
          <GameStartForm
            gameOptions={gameOptions}
            onGameStart={handleGameStart}
          />
        </div>
      </div>
    </div>
  );
}

GameStart.propTypes = {
  gameOptions: PropTypes.exact({
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    category: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    difficulty: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  onSelectOptions: PropTypes.func.isRequired,
};

export default GameStart;
