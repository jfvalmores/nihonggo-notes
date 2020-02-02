import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../core/DataContext.js';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
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

const Challenge = (props) => {
  const classes = styles();
  const { hiraganaList, katakanaList } = useContext(DataContext);
  const hl = hiraganaList.flat();
  const kl = katakanaList.flat();
  const [hiragana, setHiragana] = useState([]);
  const [katakana, setKatakana] = useState([]);
  const [mainPool, setMainPool] = useState([]);
  const [quizPool, setQuizPool] = useState([]);
  const [quizMode, setQuizMode] = useState(false);
  const [highest, setHighest] = useState(0);
  const {
    showPopup
  } = props;

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
      showPopup('Already in Guess Pool.', 'info');
    } else {
      newPool.push(item);
      setQuizPool(newPool);
    }
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

  const determineHighest = (score) => {
    if (score > highest) setHighest(score);
  }

  return (
    <div className={classes.containerGrid}>
      <Slide
        direction="down"
        in={quizMode}
        mountOnEnter
        unmountOnExit>
        <div>
          <CharactersQuiz
            {...props}
            quizPool={quizPool}
            handleQuizMode={handleQuizMode}
            determineHighest={determineHighest}
          />
        </div>
      </Slide>
      <Slide direction="up" in={!quizMode} mountOnEnter unmountOnExit>
        <div>
          <CssBaseline />
          {highest > 0 &&
            <div>
              <h3>Highest: {highest}</h3>
            </div>
          }
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
    </div>
  );
}

export default Challenge;