import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import "./GameStart.css";

function GameStart() {
  return (
    <Container maxWidth="sm" className="game-start">
      <Typography variant="h1" component="h2" className="game-start__label_h1">Wellcome</Typography>
      <Typography variant="h5" component="h6" className="game-start__label_p">I have presenting this game for you</Typography>
      <Typography variant="h5" component="h6" className="game-start__label_discr">Answer correctly to the questions of whose capital is it or which country is the flag</Typography>
      <Grid container justify="space-around" className="game-start__buttots">
        <Grid item xs={12}><Typography variant="subtitle2" component="h2" className="game-start__game-discr">Choise your game</Typography></Grid>
        <Button variant="outlined" component={Link} to="/capitals" className="game-start__button">Capitals</Button>
        <Button variant="outlined" component={Link} to="/flags" className="game-start__button">Flags</Button>
      </Grid>
    </Container>
  )
}

export default GameStart
