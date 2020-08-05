import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import GameStart from './components/game_start/GameStart';
import Capitals from './components/capitals/Capitals';
import Flags from './components/flags/Flags';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <GameStart />
        </Route>
        <Switch>
          <Route path="/capitals">
            <Capitals />
          </Route>
          <Route path="/flags">
            <Flags />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
