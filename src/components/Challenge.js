import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../core/DataContext.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import PopupMessage from './PopupMessage.js';

const styles = makeStyles({
  containerGrid: {
    margin: 14
  },
  charBtn: {
    fontSize: 18,
    fontWeight: 600,
    margin: 2
  },
  keywordContainer: {
    margin: '10px 0'
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

  return (
    <div className={classes.containerGrid}>
      <CssBaseline />
      <Grid container>
        <span>Guessing pool:</span>
        <div>
          {guessPool.map((item, idx) =>
            <Tooltip
              title={item.label}
              key={`item-${idx}`}>
              <Button
                className={classes.charBtn}
                variant="outlined"
                color="default">
                {item.character}
              </Button>
            </Tooltip>
          )}
        </div>
      </Grid>
      <Grid
        container
        spacing={0}>
        <Grid item xs={6}>
          <SearchList 
            origList={hl}
            onSearch={result => setHiragana(result)}
            textLabel={'Search Hiragana'}
            list={hiragana}
            handleClick={item => addToGuessPool(item)} />
        </Grid>
        <Grid item xs={6}>
          <SearchList 
            origList={kl}
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

const SearchList = props => {
  const classes = styles();
  const [keyword, setKeyword] = useState('');

  const handleChange = e => {
    e.preventDefault();
    const key = e.target.value || '';
    setKeyword(key);
    searchCharacter(key);
  }

  const searchCharacter = key => {
    props.onSearch(props.origList.filter(o => o.label.includes(key)));
  }

  return (
    <>
      <div className={classes.keywordContainer}>
        <Grid
          container
          spacing={1}
          alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField
              label={props.textLabel}
              value={keyword}
              onChange={handleChange} />
          </Grid>
        </Grid>
      </div>
      <div>
        {props.list.length === 0 ?
          (<p>No results</p>) :
          (props.list.map((item, idx) => (
            <Tooltip
              title={item.label}
              key={`item-${idx}`}>
              <Button
                className={classes.charBtn}
                variant="outlined"
                color="secondary"
                onClick={() => props.handleClick(item)}>
                {item.character}
              </Button>
            </Tooltip>
          )))}
      </div>
    </>
  );
}

export default Challenge;