import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = makeStyles({
  charBtn: {
    fontSize: 18,
    fontWeight: 600,
    margin: 2
  },
  controlBtn: {
    textTransform: 'none'
  },
  main: {
    margin: 5,
    padding: 10
  }
});

function QuizPool(props) {
  const classes = styles();
  const {
    quizPool,
    removeItem,
    resetPool,
    randomizePool,
    toggleQuiz
  } = props;

  return (
    <Paper
      className={classes.main}
      elevation={3}>
      <div>
        {quizPool.length > 0 ?
          <>
            <Tooltip title="Start challenge">
              <Button
                color="primary"
                className={classes.controlBtn}
                onClick={() => toggleQuiz(true)}>
                Start <PlayArrowRoundedIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Refresh guess pool">
              <Button
                color="primary"
                className={classes.controlBtn}
                onClick={resetPool}>
                Reset <HighlightOffIcon />
              </Button>
            </Tooltip>
          </>
          :
          <Tooltip title="Select random characters">
            <Button
              className={classes.controlBtn}
              onClick={randomizePool}>
              Random <AutorenewIcon />
            </Button>
          </Tooltip>
        }
      </div>
      <div>
        {quizPool.map((item, idx) =>
          <Tooltip
            title={`remove '${item.label}'`}
            key={`item-${idx}`}>
            <Button
              className={classes.charBtn}
              variant="outlined"
              color="default"
              onClick={() => removeItem(idx)}>
              {item.character}
            </Button>
          </Tooltip>
        )}
      </div>
    </Paper>
  );
}

export default QuizPool;