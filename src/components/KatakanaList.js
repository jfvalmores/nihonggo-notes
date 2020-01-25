import React, { useEffect, useState } from 'react';
import { List } from './List.js';
import intf from '../core/CInterface.js';

const { getKatakanaList } = intf();

export const KatakanaList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const list = await getKatakanaList();
    setList(list);
  }

  return <List list={list} />;
}

export default KatakanaList;