import React from 'react';

import Button from '../button/Button';

import './GameStart.css';

function GameStart() {
  return (
    <div>
      <div maxWidth="sm" className="game-start font-poppins">
        <h1
          variant="h1"
          component="h2"
          className="game-start__label_h1 font-poppins"
        >
          Welcome
        </h1>
        <h6
          variant="h5"
          component="h6"
          className="game-start__label_p font-poppins"
        >
          I have presenting this game for you
        </h6>
        <h6
          variant="h5"
          component="h6"
          className="game-start__label_discr font-poppins"
        >
          Answer correctly to the questions of whose capital is it or which country is the flag
        </h6>
        <div container justify="space-around" className="game-start__buttots">
          <div item xs={12}>
            <span
              variant="subtitle2"
              component="h2"
              className="game-start__game-discr font-poppins"
            >
              Choise your game
            </span>
          </div>
          <Button
            variant="outlined"
            className="game-start__button font-poppins"
          >
            Capitals
          </Button>
          <Button
            variant="outlined"
            className="game-start__button font-poppins"
          >
            Flags
          </Button>
        </div>
      </div>
      <div className="sign font-poppins">
        Created by
        <a href="https://www.linkedin.com/in/oleksandr-skorokhod-4630871b2/" target="_blank" rel="noopener noreferrer" className="sing-link">A.Skorokhod</a>
      </div>
    </div>
  );
}

export default GameStart;
