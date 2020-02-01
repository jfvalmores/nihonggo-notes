import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DetailCard } from './DetailCard.js';
import { Grid, Button, ButtonGroup, Tooltip } from '@material-ui/core';

const customStyles = makeStyles({
  customList: {
    float: 'left',
    listStyle: 'none',
    paddingLeft: 5
  },
  characterButton: {
    fontWeight: 600
  },
  sectionContainer: {
    float: 'left',
    width: '100%',
    '& > *': {
      margin: 5,
    },
  }
});

function List(props) {
  const classes = customStyles();
  const [character, setCharacter] = useState({});

  const getSections = () => {
    return formatSectionList(props.list);
  }

  const formatSectionList = (dataList = []) => {
    let sections = [];
    for (let i = 0; i < dataList.length; i++) {
      sections.push(
        <ButtonGroup
          key={i}
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group">
          {dataList[i].map((o, idx) => formatSection(o, idx))}
        </ButtonGroup>
      );
    }

    return sections;
  }

  const formatSection = (charObj, idx) => {
    return (
      <Tooltip
        title={charObj.label}
        key={idx}>
        <Button
          className={classes.characterButton}
          onClick={() => setCharacter(charObj)}>
          {charObj.character}
        </Button>
      </Tooltip>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <div className={classes.sectionContainer}>
          {getSections()}
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <DetailCard detail={character} />
        </div>
      </Grid>
    </Grid>
  );
}

export default List;