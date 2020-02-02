import React, { useState } from 'react';
import PopupMessage from './PopupMessage.js';
import { routes } from '../core/CRoutes.js';
import { Route, Redirect } from 'react-router-dom';

function Main(props) {
  const [popup, setPopup] = useState({
    message: '',
    severity: 'info'
  });

  const handlePopupClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setPopup({
      ...popup,
      message: ''
    });
  }

  const showPopup = (message, severity) => {
    setPopup({ message, severity });
  }

  return (
    <>
      {routes.map((route, idx) => (
        <Route
          exact
          key={idx}
          path={route.path}
          render={() =>
            React.createElement(route.component, {
              ...props,
              showPopup: showPopup
            })
          }
        />
      ))}
      <Redirect exact from="/" to="home" />
      <PopupMessage
        message={popup.message}
        severity={popup.severity}
        onClose={handlePopupClose} />
    </>
  );
}

export default Main;