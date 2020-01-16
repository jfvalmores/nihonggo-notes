import React from 'react';
import DetailCard from './DetailCard.js';
import { HIRAGANA } from '../constants/hiragana.js';
import { KATAKANA } from '../constants/katakana.js';

const List = (props) => {

  const getHiraganaSection = () => {
    return formatSections(HIRAGANA);
  }

  const getKatakanaSection = () => {
    return formatSections(KATAKANA);
  }

  const formatSections = (dataList = []) => {
    let sections = [];
    for (const section of dataList) {
      sections.push(
        section.map((o, idx) => {
          return <DetailCard key={idx} detail={o}></DetailCard>
        })
      );
    }

    return sections;
  }


  return (
    <React.Fragment>
      <h1>Hiragana</h1>
      {getHiraganaSection()}
      <h1>Katakana</h1>
      {getKatakanaSection()}
    </React.Fragment>
  );

}

export default List;