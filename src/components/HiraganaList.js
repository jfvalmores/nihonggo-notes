import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import DragDropPlatform from './DragDropPlatform.js';

const styles = makeStyles({
  container: {
    float: 'left',
    width: '100%'
  },
});

const HiraganaList = (props) => {
  const [list, setList] = useState([]);
  const classes = styles();

  useEffect(() => {
    setList(props.hiraganaList);
  }, [props.hiraganaList]);

  return (
    <div className={classes.container}>
      {list.map((items, idx) =>
        <DragDropPlatform
          key={idx}
          items={items} />
      )}
    </div>
  );
}

export default HiraganaList;