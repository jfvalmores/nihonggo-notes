import Home from '../components/Home.js';
import Topics from '../components/Topics.js';
import HiraganaList from '../components/HiraganaList.js';
import KatakanaList from '../components/KatakanaList.js';

export const routes = [
  {
    title: 'Home',
    path: '/home',
    component: Home
  },
  {
    title: 'Topics',
    path: '/topics',
    component: Topics
  }
];

export const topicRoutes = [
  {
    title: 'Hiragana',
    path: '/hiragana',
    component: HiraganaList
  },
  {
    title: 'Katakana',
    path: '/katakana',
    component: KatakanaList
  }
];