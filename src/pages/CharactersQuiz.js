import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CharacterCard from '../components/CharacterCard.js'
import AlertDialog from '../components/AlertDialog.js';

const stat = {
  ongoing: 'ONGOING',
  correct: 'CORRECT',
  wrong: 'WRONG'
}

function CharactersQuiz(props) {
  const [current, setCurrent] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [status, setStatus] = useState(stat.ongoing);
  const [showRes, showResult] = useState(false);
  const [score, setScore] = useState(0);
  const {
    quizPool,
    handleQuizMode,
    showPopup,
    determineHighest,
  } = props;

  useEffect(() => {
    if (quizPool) setCurrent(current);
    console.log(quizPool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizPool]);

  const handleProceed = (answer) => {
    if (status === stat.ongoing) {
      if (!answer) {
        showPopup(`Please type answer.`, 'warning');
        return;
      }
      const correct = quizPool[current].label;
      if (answer === correct) {
        showPopup(`Correct! The answer is '${correct}'.`, 'success');
        setStatus(stat.correct);
        setScore(score + 1);
      } else {
        showPopup(`Sorry, the answer is '${correct}'.`, 'error');
        setStatus(stat.wrong);
      }
      return;
    }

    if (current === quizPool.length - 1) {
      showResult(true);
      determineHighest(score);
      return;
    }

    console.log(current, quizPool.length);
    setCurrent(current + 1);
    answerList.push(answer);
    setAnswerList(answerList);
    setStatus(stat.ongoing);
    showPopup('');
  }

  const handleAlertClose = (e, reason) => {
    if (reason === 'clickaway') return;
    handleQuizMode(false);
  }

  return (
    <>
      You're doing great! :>
      <Button
        color="secondary"
        onClick={() => handleQuizMode(false)}>
        Quit anyway...
      </Button>
      <Typography>
        {`${current + 1} / ${quizPool.length}`}
      </Typography>
      {current < quizPool.length &&
        <CharacterCard
          quizStatus={status}
          header={'What is this?'}
          character={quizPool[current].character}
          label={quizPool[current].label}
          proceedQuiz={handleProceed}
          quizMode
        />
      }
      <AlertDialog
        open={showRes}
        title={'Quiz Result'}
        onClose={handleAlertClose}>
        You scored, {score}/{quizPool.length}! Great job! :>
      </AlertDialog>
    </>
  );
}

export default CharactersQuiz;