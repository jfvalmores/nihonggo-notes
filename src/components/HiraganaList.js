import React from 'react';
import { HIRAGANA } from '../constants/hiragana.js';
import { List } from './List.js';

export const HiraganaList = () => {
  return <List list={HIRAGANA} />;
}

export default HiraganaList;