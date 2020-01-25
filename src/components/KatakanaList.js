import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DragDropPlatform from './DragDropPlatform.js';

const styles = makeStyles({
  container: {
    float: 'left',
    width: '100%'
  },
});

const KatakanaList = (props) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      {props.katakanaList.map((items, idx) =>
        <DragDropPlatform
          key={idx}
          items={items} />
      )}
    </div>
  );
}

export default KatakanaList;