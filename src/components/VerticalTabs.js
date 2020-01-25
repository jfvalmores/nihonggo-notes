import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'inherit',
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 160,
  },
  tab: {
    textTransform: 'none',
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Topic tabs"
        className={classes.tabs}>
        {props.tabs.map(
          (route, idx) =>
            <Tab
              key={idx}
              label={route.title}
              className={classes.tab}
              {...a11yProps(idx)} />)}
      </Tabs>
      {props.tabs.map(
        (route, idx) => {
          return (
            <TabPanel
              key={idx}
              value={value}
              index={idx}>
              {React.cloneElement(
                route.component,
                { ...props }
              )}
            </TabPanel>
          );
        }
      )}
    </div>
  );
}

VerticalTabs.propTypes = {
  tabs: PropTypes.array.isRequired
};
