import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './core/CRoutes.js';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header.js';
import intf from './core/CInterface.js';
import DataContext from './core/DataContext.js';

const { getHiraganaList, getKatakanaList } = intf();

const styles = makeStyles({
  container: {
    margin: 10,
    backgroundColor: 'inherit'
  }
});

const App = () => {
  const classes = styles();
  const [hiraganaList, setHiraganaList] = useState([]);
  const [katakanaList, setKatakanaList] = useState([]);

  useEffect(() => {
    getKatakana();
    getHiragana();
  }, []);

  const getHiragana = async () => {
    let list = await getHiraganaList();
    if (!list.length) list = [];
    setHiraganaList(list);
  }
  const getKatakana = async () => {
    let list = await getKatakanaList();
    if (!list.length) list = [];
    setKatakanaList(list);
  }

  return (
    <DataContext.Provider value={{ hiraganaList, katakanaList }}>
      <div>
        <Router>
          <Header>
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
          </Header>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;