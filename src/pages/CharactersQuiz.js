import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CharacterCard from '../components/CharacterCard.js';

const stat = {
  ongoing: 'ONGOING',
  correct: 'CORRECT',
  wrong: 'WRONG'
}

function CharactersQuiz(props) {
  const [current, setCurrent] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [status, setStatus] = useState(stat.ongoing);
  const {
    quizPool,
    handleQuizMode,
  } = props;

  useEffect(() => {
    if (quizPool.length) setCurrent(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizPool]);

  const handleProceed = (answer) => {
    if (answer === quizPool[current].label) {
      alert('Correct!');
    } else {
      alert('Wrong!');
    }

    setCurrent(current + 1);
    answerList.push(answer);
    setAnswerList(answerList);
  }

  return (
    <>
      You're doing great! :>
      <Button
        color="secondary"
        onClick={() => handleQuizMode(false)}>
        Quit anyway...
      </Button>

      <CharacterCard
        header={'What is this?'}
        character={quizPool[current].character}
        label={quizPool[current].label}
        proceedQuiz={handleProceed}
        quizMode
      />
    </>
  );
}

export default CharactersQuiz;