import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { DetailCard } from './DetailCard.js';

const customStyles = makeStyles({
  customList: {
    float: 'left',
    listStyle: 'none',
    paddingLeft: 5
  },
  characterButton: {
    fontSize: 20,
    fontWeight: 500,
    border: 'none',
    margin: 2,
    cursor: 'pointer'
  },
  sectionContainer: {
    float: 'left',
    width: '100%'
  }
});

export const List = (props) => {
  const classes = customStyles();
  const [character, setCharacter] = useState({});

  const getSections = () => {
    return formatSectionList(props.list);
  }

  const formatSectionList = (dataList = []) => {
    let sections = [];
    for (const section of dataList) {
      sections.push(
        <ul className={classes.customList}>
          {section.map((o, idx) => {
            return (
              <li key={idx}>
                <button className={classes.characterButton} onClick={() => setCharacter(o)}>{o.character}</button>
              </li>
            );
          })}
        </ul>
      );
    }

    return sections;
  }

  return (
    <React.Fragment>
      <div className={classes.sectionContainer}>{getSections()}</div>
      <div>
        <DetailCard detail={character} />
      </div>
    </React.Fragment>
  );

}