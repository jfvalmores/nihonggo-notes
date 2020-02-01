import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../core/DataContext.js';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import PopupMessage from '../components/PopupMessage.js';
import SearchList from '../components/SearchList.js';
import GuessPool from '../components/GuessPool.js';

const styles = makeStyles({
  containerGrid: {
    margin: 14
  }
});

const Challenge = () => {
  const classes = styles();
  const { hiraganaList, katakanaList } = useContext(DataContext);
  const hl = hiraganaList.flat();
  const kl = katakanaList.flat();
  const [hiragana, setHiragana] = useState([]);
  const [katakana, setKatakana] = useState([]);
  const [guessPool, setGuessPool] = useState([]);
  const [popup, setPopup] = useState({
    show: false,
    message: '',
  });

  useEffect(() => {
    setHiragana(hl);
    setKatakana(kl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hiraganaList, katakanaList]);

  const addToGuessPool = item => {
    const newPool = guessPool.slice();
    const exists = guessPool.find(o => o.label === item.label);
    if (exists) {
      setPopup({ show: true, message: 'Already in Guess Pool.' });
    } else {
      newPool.push(item);
      setGuessPool(newPool);
    }
  }

  const closePopup = () => {
    setPopup({ show: false, message: '' });
  }

  const handleRemoveItem = (index) => {
    const newPool = guessPool.slice(0, index).concat(guessPool.slice(index + 1, guessPool.length));
    console.log(index, guessPool);
    setGuessPool(newPool);
  }

  return (
    <div className={classes.containerGrid}>
      <CssBaseline />
      <Grid container>
        <GuessPool
          guessPool={guessPool}
          removeItem={handleRemoveItem}
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
            handleClick={item => addToGuessPool(item)} />
        </Grid>
        <Grid item xs={6}>
          <SearchList
            mainList={kl}
            onSearch={result => setKatakana(result)}
            textLabel={'Search Katakana'}
            list={katakana}
            handleClick={item => addToGuessPool(item)} />
        </Grid>
      </Grid>
      <PopupMessage
        {...popup}
        handleClose={closePopup} />
    </div>
  );
}

export default Challenge;