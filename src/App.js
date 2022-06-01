import React, { useState } from 'react';
import './App.css';
import GameStart from './components/game_start/GameStart';
import Capitals from './components/capitals/Capitals';
import Footer from './components/footer/Footer';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const handleTryAgain = () => setIsGameStarted(false);

  return (
    <div className="App">
      { isGameStarted ? <Capitals onTryAgain={handleTryAgain} /> : <GameStart /> }
      <Footer />
    </div>
  );
}

export default App;
