import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { topicRoutes } from '../system/routes.js';

export const Topics = () => {
  return (
    <div>
      <Router>
        <ul>
          {topicRoutes.map((route, idx) => {
            if (route.title)
              return (
                <li key={idx}>
                  <Link to={route.path}>{route.title}</Link>
                </li>
              )
            return null;
          })}
        </ul>
        <div>
          <Switch>
            {topicRoutes.map((route, idx) => (
              <Route
                key={idx}
                exact
                {...route}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Topics;