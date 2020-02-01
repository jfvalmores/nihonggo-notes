import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../core/DataContext.js';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import PopupMessage from '../components/PopupMessage.js';
import SearchList from '../components/SearchList.js';
import QuizPool from '../components/QuizPool.js';
import Slide from '@material-ui/core/Slide';
import CharactersQuiz from '../pages/CharactersQuiz.js';

const styles = makeStyles({
  containerGrid: {
    margin: 14
  }
});

const _sampleSize = require('lodash/sampleSize');

const Challenge = () => {
  const classes = styles();
  const { hiraganaList, katakanaList } = useContext(DataContext);
  const hl = hiraganaList.flat();
  const kl = katakanaList.flat();
  const [hiragana, setHiragana] = useState([]);
  const [katakana, setKatakana] = useState([]);
  const [mainPool, setMainPool] = useState([]);
  const [quizPool, setQuizPool] = useState([]);
  const [quizMode, setQuizMode] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    message: '',
  });

  useEffect(() => {
    setHiragana(hl);
    setKatakana(kl);
    setMainPool(hl.concat(kl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hiraganaList, katakanaList]);

  const addToQuizPool = item => {
    const newPool = quizPool.slice();
    const exists = quizPool.find(o => o.label === item.label);
    if (exists) {
      setPopup({ show: true, message: 'Already in Guess Pool.' });
    } else {
      newPool.push(item);
      setQuizPool(newPool);
    }
  }

  const closePopup = () => {
    setPopup({ show: false, message: '' });
  }

  const handleRemoveItem = (index) => {
    const newPool = quizPool.slice(0, index).concat(quizPool.slice(index + 1, quizPool.length));
    console.log(index, quizPool);
    setQuizPool(newPool);
  }

  const handleResetPool = () => setQuizPool([]);

  const handleRandomizePool = () => {
    console.log(mainPool);
    setQuizPool(_sampleSize(mainPool, 10));
  }

  const handleQuizMode = (isQuiz) => setQuizMode(isQuiz);

  return (
    <div className={classes.containerGrid}>
      <Slide
        direction="down"
        in={quizMode}
        mountOnEnter
        unmountOnExit>
        <div>
          <CharactersQuiz
            quizPool={quizPool}
            handleQuizMode={handleQuizMode}
          />
        </div>
      </Slide>
      <Slide direction="up" in={!quizMode} mountOnEnter unmountOnExit>
        <div>
          <CssBaseline />
          <Grid container>
            <QuizPool
              quizPool={quizPool}
              removeItem={handleRemoveItem}
              resetPool={handleResetPool}
              randomizePool={handleRandomizePool}
              toggleQuiz={handleQuizMode}
            />
          </Grid>
          <Grid
            container
            spacing={0}>
            <Grid item xs={6}>
              <SearchList
                mainList={hl}
                onSearch={result => setHiragana(result)}
                textLabel={'Search Hiragana'}
                list={hiragana}
                handleClick={item => addToQuizPool(item)} />
            </Grid>
            <Grid item xs={6}>
              <SearchList
                mainList={kl}
                onSearch={result => setKatakana(result)}
                textLabel={'Search Katakana'}
                list={katakana}
                handleClick={item => addToQuizPool(item)} />
            </Grid>
          </Grid>
        </div>
      </Slide>
      <PopupMessage
        {...popup}
        handleClose={closePopup} />
    </div>
  );
}

export default Challenge;