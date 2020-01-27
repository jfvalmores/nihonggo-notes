import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DragDropPlatform from './DragDropPlatform.js';
import DataContext from '../core/DataContext.js';

const styles = makeStyles({
  container: {
    float: 'left',
    width: '100%'
  },
});

const HiraganaList = () => {
  const classes = styles();
  const { hiraganaList } = useContext(DataContext);

  return (
    <div className={classes.container}>
      {hiraganaList.map((items, idx) =>
        <DragDropPlatform
          key={idx}
          items={items} />
      )}
    </div>
  );
}

export default HiraganaList;