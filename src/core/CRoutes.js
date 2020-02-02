import React from 'react';
import Home from '../pages/Home.js';
import Topics from '../pages/Topics.js';
import KatakanaList from '../pages/KatakanaList.js';
import HiraganaList from '../pages/HiraganaList.js';
import Challenge from '../pages/Challenge.js';
import Registration from '../pages/Registration.js';

import DescriptionIcon from '@material-ui/icons/Description';
import HomeIcon from '@material-ui/icons/Home';
import GamesIcon from '@material-ui/icons/Games';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


export const routes = [
  {
    title: 'Home',
    path: '/home',
    icon: HomeIcon,
    component: Home
  },
  {
    title: 'Topics',
    path: '/topics',
    icon: DescriptionIcon,
    component: Topics
  },
  {
    title: 'Challenge',
    path: '/challenge',
    icon: GamesIcon,
    component: Challenge
  },
  {
    title: 'Registration',
    path: '/registration',
    icon: AccountBoxIcon,
    component: Registration
  },
];

export const topicRoutes = [
  {
    title: 'Hiragana',
    path: '/hiragana',
    component: <HiraganaList />
  },
  {
    title: 'Katakana',
    path: '/katakana',
    component: <KatakanaList />
  }
];