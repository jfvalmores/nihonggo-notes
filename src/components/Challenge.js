import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../core/DataContext.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  containerGrid: {
    margin: 30
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
  const [keywords, setKeywords] = useState({
    hKeyword: '',
    kKeyword: ''
  });

  useEffect(() => {
    setHiragana(hl);
    setKatakana(kl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hiraganaList, katakanaList]);

  const handleChange = e => {
    const p = { [e.target.id]: e.target.value };
    setKeywords({
      ...keywords,
      ...p
    });

    searchCharacter({ id: e.target.id, val: e.target.value });
  }

  const searchCharacter = param => {
    if (param.id === 'hKeyword') {
      setHiragana(hl.filter(o => o.label.includes(param.val)));
    } else {
      setKatakana(kl.filter(o => o.label.includes(param.val)));
    }
  }

  const addToGuessPool = item => {
    const newPool = guessPool.slice();
    const exists = guessPool.filter(o => o.label.includes(item.val));
    console.log(exists);
    if (exists.length === 0) {
      newPool.push(item);
      setGuessPool(newPool);
    }
  }

  return (
    <>
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
        spacing={0}
        className={classes.containerGrid}>
        <Grid xs={6}>
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
                  id="hKeyword"
                  label="Search Hiragana"
                  value={keywords.hKeyword}
                  onChange={handleChange} />
              </Grid>
            </Grid>
          </div>
          <div>
            {hiragana.length === 0 ?
              (<p>No results</p>) :
              (hiragana.map((item, idx) => (
                <Tooltip
                  title={item.label}
                  key={`item-${idx}`}>
                  <Button
                    className={classes.charBtn}
                    variant="outlined"
                    color="secondary"
                    onClick={() => addToGuessPool(item)}>
                    {item.character}
                  </Button>
                </Tooltip>
              )))}
          </div>
        </Grid>
        <Grid xs={6}>
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
                  id="kKeyword"
                  label="Search Katakana"
                  value={keywords.kKeyword}
                  onChange={handleChange} />
              </Grid>
            </Grid>
          </div>
          <div>
            {katakana.length === 0 ?
              (<p>No results</p>) :
              (katakana.map((item, idx) => (
                <Tooltip
                  title={item.label}
                  key={`item-${idx}`}>
                  <Button
                    className={classes.charBtn}
                    variant="outlined"
                    color="secondary"
                    onClick={() => addToGuessPool(item)}>
                    {item.character}
                  </Button>
                </Tooltip>
              )))}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Challenge;