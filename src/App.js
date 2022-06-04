import React, { useState } from 'react';
import './App.css';
import GameStart from './components/game_start/GameStart';
import GameBoard from './components/game_board/GameBoard';
import Footer from './components/footer/Footer';

import { DEFAULT_GAME_OPTIONS, GAME_DIFFICULTY_LENGTH } from './utils/constants';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameOptions, setGameOptions] = useState(DEFAULT_GAME_OPTIONS);

  const handleGemeStart = (options) => {
    setGameOptions(options);
    setIsGameStarted(true);
  };

  const GameComponent = isGameStarted
    ? (
      <GameBoard
        gameOptions={gameOptions}
        countdownCounter={GAME_DIFFICULTY_LENGTH[gameOptions.difficulty]}
        onNewGame={() => setIsGameStarted(false)}
      />
    )
    : <GameStart gameOptions={gameOptions} onSelectOptions={handleGemeStart} />;

  return (
    <div className="App">
      { GameComponent }
      <Footer />
    </div>
  );
}

export default App;
