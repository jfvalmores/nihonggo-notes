import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';

const customStyles = makeStyles({
  card: {
    width: 150,
    margin: 10,
    backgroundColor: 'lightgreen',
  },
  detailText: {
    fontSize: 50,
    fontWeight: 600,
    textAlign: 'center'
  },
  detailTextSub: {
    fontSize: 20,
    textAlign: 'center'
  }
});

function DetailCard(props) {
  if (!props.detail || !props.detail.character) return null;

  const classes = customStyles();

  return (
    <Grow in={true}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="h2"
            component="h2"
            className={classes.detailText}>
            {props.detail.character}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.detailTextSub}>
            {props.detail.label}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </Grow>
  );
}

export default DetailCard;