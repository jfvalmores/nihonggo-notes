import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { routes } from '../system/routes.js';
import { makeStyles } from '@material-ui/core/styles';

const customStyles = makeStyles({
  container: {
    margin: 10
  }
});

const Main = () => {
  const classes = customStyles();

  return (
    <div>
      <Router>
        <ul>
          {routes.map((route, idx) => {
            if (route.title)
              return (
                <li key={idx}>
                  <Link to={route.path}>{route.title}</Link>
                </li>
              )
            return null;
          })}
        </ul>
        <hr />
        <div className={classes.container}>
          <Switch>
            {routes.map((route, idx) => (
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

export default Main;