import axios from 'axios';
import { serverURL } from '../constants/config.js';

const url = serverURL;

const CInterface = () => {
  const getHiraganaList = () => {
    return axios.get(`${url}/hiragana`)
      .then(response => handleResult(response))
      .catch(error => handleException(error));
  }

  const getKatakanaList = () => {
    return axios.get(`${url}/katakana`)
      .then(response => handleResult(response))
      .catch(error => handleException(error));
  }

  return {
    getHiraganaList,
    getKatakanaList
  };
}

function handleResult(response) {
  console.log(response);
  if (!response.data) return null;

  return response.data;
}

function handleException(error) {
  console.log(error);

  return error;
}

export default CInterface;