import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  charBtn: {
    fontSize: 18,
    fontWeight: 600,
    margin: 2
  }
});

function GuessPool(props) {
  const classes = styles();
  const {
    guessPool,
    removeItem,
  } = props;

  return (
    <div>
      <span>Guessing pool:</span>
      <div>
        {guessPool.map((item, idx) =>
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
    </div>
  );
}

export default GuessPool;