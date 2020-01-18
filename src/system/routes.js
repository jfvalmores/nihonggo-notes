import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../components/Home.js';
import Topics from '../components/Topics.js';
import HiraganaList from '../components/HiraganaList.js';
import KatakanaList from '../components/KatakanaList.js';

export const routes = [
  {
    path: '/',
    component: Home
  },
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
]

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}