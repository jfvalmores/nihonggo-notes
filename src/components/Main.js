import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../system/routes.js';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header.js';

const styles = makeStyles({
  container: {
    margin: 10,
    backgroundColor: 'inherit'
  }
});

const Main = () => {
  const classes = styles();

  return (
    <React.Fragment>
      <div>
        <Router>
          <Header />
          <div className={classes.container}>
            <Switch>
              {routes.map((route, idx) => (
                <Route
                  key={idx}
                  exact
                  {...route}
                />
              ))}
              <Redirect exact from="/" to="home" />
            </Switch>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default Main;