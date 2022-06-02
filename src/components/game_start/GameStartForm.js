import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { returnCorrectValue } from '../../utils/utils';
import {
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  TYPE_OPTIONS,
} from './utils/constants';

import Button from '../button/Button';

function GameStartForm({ gameOptions, onGameStart }) {
  const [rawGameOptions, setRawGameOptions] = useState(gameOptions);

  const handleUpdate = ({ target }) => {
    const { name, value } = target;

    setRawGameOptions((prev) => ({
      ...prev,
      [name]: returnCorrectValue(value),
    }));
  };

  const handleOnGameStart = () => onGameStart(rawGameOptions);

  return (
    <form className="g-s-from">
      <div className="g-s-from__item">
        <label htmlFor="amount">
          Number of Questions:
          <input
            id="amount"
            type="text"
            name="amount"
            value={rawGameOptions.amount}
            onInput={handleUpdate}
          />
        </label>
      </div>
      <div className="g-s-from__item">
        <label htmlFor="category">
          Select Category:
          <select
            id="category"
            name="category"
            value={rawGameOptions.category}
            onChange={handleUpdate}
          >
            {CATEGORY_OPTIONS.map((item, idx) => {
              const safeKey = `${item}_${idx}`;
              return (
                <option key={safeKey} value={item.value}>{ item.label }</option>
              );
            })}
          </select>
        </label>
      </div>
      <div className="g-s-from__item">
        <label htmlFor="difficulty">
          Select Difficulty:
          <select
            id="difficulty"
            name="difficulty"
            value={rawGameOptions.difficulty}
            onChange={handleUpdate}
          >
            {DIFFICULTY_OPTIONS.map((item, idx) => {
              const safeKey = `${item}_${idx}`;
              return (
                <option key={safeKey} value={item.value}>{ item.label }</option>
              );
            })}
          </select>
        </label>
      </div>
      <div className="g-s-from__item">
        <label htmlFor="type">
          Select Type:
          <select
            id="type"
            name="type"
            value={rawGameOptions.type}
            onChange={handleUpdate}
          >
            {TYPE_OPTIONS.map((item, idx) => {
              const safeKey = `${item}_${idx}`;
              return (
                <option key={safeKey} value={item.value}>{ item.label }</option>
              );
            })}
          </select>
        </label>
      </div>
      <div className="g-s-from__item">
        <Button
          variant="outlined"
          className="game-start__button font-poppins"
          onClick={handleOnGameStart}
        >
          Start new Game
        </Button>
      </div>
    </form>
  );
}

GameStartForm.propTypes = {
  gameOptions: PropTypes.exact({
    amount: PropTypes.number,
    category: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    difficulty: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  onGameStart: PropTypes.func.isRequired,
};

export default GameStartForm;
