import React, { useState } from 'react';
import './App.css';
import GameStart from './components/game_start/GameStart';
import GameBoard from './components/game_board/GameBoard';
import Footer from './components/footer/Footer';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const [gameOptions, setGameOptions] = useState({});

  const handleGemeStart = (options) => {
    setGameOptions(options);
    setIsGameStarted(true);
  };

  const GameComponent = isGameStarted
    ? (<GameBoard gameOptions={gameOptions} onNewGame={() => setIsGameStarted(false)} />)
    : <GameStart onSelectOptions={handleGemeStart} />;

  return (
    <div className="App">
      { GameComponent }
      <Footer />
    </div>
  );
}

export default App;
