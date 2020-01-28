import React from 'react';
import Home from '../components/Home.js';
import Topics from '../components/Topics.js';
import KatakanaList from '../components/KatakanaList.js';
import HiraganaList from '../components/HiraganaList.js';
import Challenge from '../components/Challenge.js';
import Registration from '../components/Registration.js';

import DescriptionIcon from '@material-ui/icons/Description';
import HomeIcon from '@material-ui/icons/Home';
import GamesIcon from '@material-ui/icons/Games';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


export const routes = [
  {
    title: 'Home',
    path: '/home',
    icon: <HomeIcon />,
    component: Home
  },
  {
    title: 'Topics',
    path: '/topics',
    icon: <DescriptionIcon />,
    component: Topics
  },
  {
    title: 'Challenge',
    path: '/challenge',
    icon: <GamesIcon />,
    component: Challenge
  },
  {
    title: 'Registration',
    path: '/registration',
    icon: <AccountBoxIcon />,
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