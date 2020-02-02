import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = makeStyles(theme => ({
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
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  label: {
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: 'white'
  }
}));

function CharacterCard(props) {
  const [answer, setAnswer] = useState('');
  const classes = styles();
  const {
    header,
    character,
    label,
    refresh,
    quizMode,
    proceedQuiz,
    quizStatus,
  } = props;

  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      proceedQuiz(answer);
      if (quizStatus !== 'ONGOING') {
        setAnswer('');
      }
    }
  }

  function proceed() {
    proceedQuiz(answer);
    setAnswer('');
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          variant="subtitle1"
          component="h2">
          {header}
        </Typography>
        <Typography
          variant="h1"
          component="h2"
          className={classes.character}>
          {character}
        </Typography>
        {quizMode ?
          <>
            <FormControl variant="outlined" error={quizStatus === 'WRONG'}>
              <InputLabel
                className={classes.label}
                htmlFor="answer">
                Answer
              </InputLabel>
              <OutlinedInput
                id="answer"
                label="Answer"
                value={answer}
                onChange={handleChangeAnswer}
                onKeyDown={handleKeyDown}
              />
              {quizStatus !== 'ONGOING' &&
                <FormHelperText id="component-helper-text">
                  '{label}'
                </FormHelperText>
              }
            </FormControl>
          </>
          :
          <Typography
            variant="h6"
            component="p">
            {label}
          </Typography>
        }
      </CardContent>
      <CardActions className={classes.actions}>
        {quizMode ?
          <Button
            size="small"
            onClick={proceed}
            className={classes.actionButton}>
            {quizStatus === 'ONGOING' ? 'Confirm' : 'Proceed'}
          </Button>
          :
          <Button
            size="small"
            onClick={refresh}
            className={classes.actionButton}>
            Refresh
          </Button>
        }

      </CardActions>
    </Card>
  );
}

export default CharacterCard;