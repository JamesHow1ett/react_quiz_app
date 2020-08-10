import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import postData from '../../Api';
//components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//styles
import './Capitals.css';

function Capitals() {
  const [isWrong, setIsWrong] = useState(true);
  const [recivedData, setRecivedData] = useState({});
  const [question, setQuestion] = useState(1);
  const [code, setCode] = useState(0 + randomInteger());
  const [result, setResult] = useState(0);
  const [finalMsg, setFinalMsg] = useState('Whoops, you are make mistake');

  useEffect(() => {
    postData()
      .then(res => setRecivedData(res))
      .catch(error => console.log(error));
  }, []);

  function tryAgain(event) {
    setIsWrong(!isWrong);
    setResult(0);
    setCode(0 + randomInteger());
    setQuestion(1);
  }

  function wrongAnswer(event) {
    setIsWrong(!isWrong);
  }

  // function checkAnswer(event) {
  //   let target = event.target;
  //   target.offsetParent.classList.add('correct');
  //   setTimeout(nextQustion(), 1000);
  // }

  function nextQustion() {
    setCode(code + 1);
    setQuestion(question + 1);
    setResult(result + 1);
    if (question > 9) {
      setFinalMsg('Congratulation, you answer right to all questions');
      setIsWrong(!isWrong);
    }
  }

  function randomInteger(min = 0, max = 42) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function setIndex(code, randomInteger) {
    let index = code + randomInteger;
    let range = 52;
    if (index > range) {
      return 0 + randomInteger;
    } else {

    }
    
    
    return index;
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
        <Typography variant="h4" component="h4" className="game__quiz">{recivedData[code] && recivedData[code].capital} is a capital of</Typography>
        <Button className="game__answer" onClick={() => {wrongAnswer()}}>{recivedData[code] && recivedData[setIndex(code, randomInteger())].name}</Button>
        <Button className="game__answer" onClick={() => {nextQustion()}}>{recivedData[code] && recivedData[code].name}</Button>
        <Button className="game__answer" onClick={() => {wrongAnswer()}}>{recivedData[code] && recivedData[setIndex(code, randomInteger())].name}</Button>
        <Button className="game__answer" onClick={() => {wrongAnswer()}}>{recivedData[code] && recivedData[setIndex(code, randomInteger())].name}</Button>
      </Grid>
    </div>
  ) : (
    <div className="capitals-block">
      <Typography className="capitals__label font-poppins">Capitals Quiz</Typography>
      <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className="game-board"
      >
      <Button component={Link} to="/" className="font-poppins">Home</Button>
        <Typography variant="h4" component="h4" className="font-poppins">{finalMsg}</Typography>
        <Typography variant="h4" component="h4" className="font-poppins">Results: {result}/10</Typography>
        <Button className="game__again font-poppins" onClick={() => {tryAgain()}}>Try again</Button>
      </Grid>
    </div>
  )
}

export default Capitals
