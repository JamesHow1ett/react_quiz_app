import React from 'react';
import { Link } from 'react-router-dom';
// import postData from '../../Api';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './GameStart.css';

function GameStart() {
  return (
    <div>
      <Container maxWidth="sm" className="game-start font-poppins">
        <Typography variant="h1" component="h2" className="game-start__label_h1 font-poppins">Welcome</Typography>
        <Typography variant="h5" component="h6" className="game-start__label_p font-poppins">I have presenting this game for you</Typography>
        <Typography variant="h5" component="h6" className="game-start__label_discr font-poppins">Answer correctly to the questions of whose capital is it or which country is the flag</Typography>
        <Grid container justify="space-around" className="game-start__buttots">
          <Grid item xs={12}><Typography variant="subtitle2" component="h2" className="game-start__game-discr font-poppins">Choise your game</Typography></Grid>
          <Button variant="outlined" component={Link} to="/capitals" className="game-start__button font-poppins">Capitals</Button>
          <Button variant="outlined" component={Link} to="/flags" className="game-start__button font-poppins">Flags</Button>
        </Grid>
      </Container>
      <Typography className="sign font-poppins">
        Created by
        <a href="https://www.linkedin.com/in/aleksandr-skorokhod-4630871b2/" target="_blank" rel="noopener noreferrer" className="sing-link">A.Skorokhod</a>
      </Typography>
    </div>
  );
}

export default GameStart;
