import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../core/DataContext.js';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = makeStyles({
  card: {
    maxWidth: 300,
    textAlign: 'center',
    margin: '20px auto',
  },
  character: {
    fontWeight: 500,
  },
  actions: {
    float: 'right',
  },
  actionButton: {
    fontSize: 10
  }
});

const Home = () => {
  const { hiraganaList, katakanaList } = useContext(DataContext);
  const hl = hiraganaList.flat();
  const kl = katakanaList.flat();
  const classes = styles();
  const [hiragana, setHiragana] = useState(null);
  const [katakana, setKatakana] = useState(null);

  useEffect(() => {
    refresh(0);
    refresh(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hiraganaList, katakanaList]);

  const refresh = (mode = 1) => {
    if (mode)
      setKatakana(kl[Math.floor(Math.random() * kl.length)]);
    else 
      setHiragana(hl[Math.floor(Math.random() * hl.length)]);
  }

  return (
    <div>
      {hiragana && 
        <CharacterCard 
          classes={classes}
          header={'Quick Card:'}
          character={hiragana.character}
          label={hiragana.label}
          onClick={() => refresh(0)} />
      }
      {katakana && 
        <CharacterCard 
          classes={classes}
          header={'Quick Card:'}
          character={katakana.character}
          label={katakana.label}
          onClick={() => refresh(1)} />
      }
    </div>
  );
}

const CharacterCard = (props) => {
  return (
    <Card className={props.classes.card}>
      <CardContent>
        <Typography variant="subtitle1" component="h2">
          {props.header}
        </Typography>
        <Typography variant="h1" component="h2" className={props.classes.character}>
          {props.character}
        </Typography>
        <Typography variant="h6" component="p">
          {props.label}
        </Typography>
      </CardContent>
      <CardActions className={props.classes.actions}>
        <Button 
          size="small"
          onClick={props.onClick}
          className={props.classes.actionButton}>Refresh</Button>
      </CardActions>
    </Card>
  );
}

export default Home;