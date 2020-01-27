import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Sidebar from './Sidebar.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Sidebar />
            <Typography variant="subtitle1" className={classes.title}>
              Notes
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar variant="dense" />
      <Container disableGutters maxWidth={false}>
        <Box my={0}>
          {props.children}
        </Box>
      </Container>
    </div>
  );
}

export default Header;