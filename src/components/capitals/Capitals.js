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

  function addQuestions(data, code) {
    let arr = [];
    if(data[code] !== undefined) {
      arr.push(
        {
          questions: [
            [data[code].name, randomInteger(0, 10)],
            [data[setIndex(code, randomInteger())].name, randomInteger(0, 10)],
            [data[setIndex(code, randomInteger(10, 40))].name, randomInteger(0, 10)],
            [data[setIndex(code, randomInteger(0, 15))].name, randomInteger(0, 10)]
          ],
          answer: data[code].name
        });
    }
    return arr;
  }

  function nextQustion() {
    setCode(code + 1);
    setQuestion(question + 1);
    setResult(prev => prev + 1);
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
    }
    return index;
  }

  function checkAnswer(event, answer) {
    let target = event.target;
    if (target.textContent === answer) {
      nextQustion();
    } else {
      wrongAnswer();
    }
  }

  const listItems = addQuestions(recivedData, code).map((item) => (item.questions.sort((a, b) => a[1] > b[1]).map((quiz) => {
    return (<li className="game__answer font-poppins" key={quiz} onClick={(event) => {checkAnswer(event, item.answer)}}>{quiz[0]}</li>)
  })));


  return isWrong ? (
    <div className="capitals-block">
      <Typography className="capitals__label font-poppins">Capitals Quiz</Typography>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        className="game-board"
      >
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Button variant="outlined" component={Link} to="/" className="game__buttons game__buttons_home font-poppins">Home</Button>
        </Grid>
        <Typography variant="h6" component="h4" className="game__question-counter font-poppins">Question {question} is 10</Typography>
        <Typography variant="h4" component="h4" className="game__quiz font-poppins">{recivedData[code] && recivedData[code].capital} is a capital of</Typography>
        <ul className="answers">{listItems}</ul>
      </Grid>
      <Typography className="sign font-poppins">Created by 
        <a href="https://www.linkedin.com/in/aleksandr-skorokhod-4630871b2/" target="_blank" rel="noopener noreferrer" className="sing-link">A.Skorokhod</a>
      </Typography>
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
      <Button variant="outlined" component={Link} to="/" className="game__buttons game__buttons_home font-poppins">Home</Button>
        <Typography variant="h4" component="h4" className="font-poppins">{finalMsg}</Typography>
        <Typography variant="h4" component="h4" className="font-poppins">Results: {result}/10</Typography>
        <Button className="game__again font-poppins" onClick={() => {tryAgain()}}>Try again</Button>
      </Grid>
      <Typography className="sign font-poppins">Created by 
        <a href="https://www.linkedin.com/in/aleksandr-skorokhod-4630871b2/" target="_blank" rel="noopener noreferrer" className="sing-link">A.Skorokhod</a>
      </Typography>
    </div>
  )
}

export default Capitals
