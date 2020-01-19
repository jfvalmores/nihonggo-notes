import React from 'react';
import { KATAKANA } from '../constants/katakana.js';
import { List } from './List.js';

export const KatakanaList = (props) => {
  return <List list={KATAKANA} />;
}

export default KatakanaList;