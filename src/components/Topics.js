import React, { useState, useEffect } from 'react';
import { topicRoutes } from '../core/CRoutes.js';
import VerticalTabs from './VerticalTabs.js';
import intf from '../core/CInterface.js';

const { getHiraganaList, getKatakanaList } = intf();

export const Topics = () => {
  const [hiraganaList, setHiraganaList] = useState([]);
  const [katakanaList, setKatakanaList] = useState([]);

  useEffect(() => {
    getKatakana();
    getHiragana();
  }, []);

  const getHiragana = async () => setHiraganaList(await getHiraganaList())
  const getKatakana = async () => setKatakanaList(await getKatakanaList())

  return (
    <VerticalTabs
      hiraganaList={hiraganaList}
      katakanaList={katakanaList}
      tabs={topicRoutes} />
  );
}

export default Topics;