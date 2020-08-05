import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './Capitals.css';

function Capitals() {
  const [isWrong, setIsWrong] = useState(true);

  function tryAgain(event) {
    setIsWrong(!isWrong);
  }

  function answer(event) {
    setIsWrong(!isWrong);
  }

  return isWrong ? (
    <div className="capitals-block">
      <Typography className="capitals__label">Capitals Quiz</Typography>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        className="game-board"
      >
        <Typography variant="h4" component="h4" className="game__quiz">Kyiv is a capital of</Typography>
        <Button className="game__answer"  onClick={() => {answer()}}>Ukraine</Button>
        <Button className="game__answer">Poland</Button>
        <Button className="game__answer">Spain</Button>
        <Button className="game__answer">Belarus</Button>
      </Grid>
    </div>
  ) : (
    <div className="capitals-block">
      <Typography className="capitals__label">Capitals Quiz</Typography>
      <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className="game-board"
      >
      <Button component={Link} to="/">Home</Button>
        <Typography>Results</Typography>
        <Button className="game__again" onClick={() => {tryAgain()}}>Try again</Button>
      </Grid>
    </div>
  )
}

export default Capitals
