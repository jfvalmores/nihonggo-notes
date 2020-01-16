import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const customStyles = makeStyles({
  card: {
    width: 275,
    margin: 10,
    backgroundColor: 'lightgrey',
  },
  detailText: {
    fontSize: 50,
    textAlign: 'center'
  }
});

const DetailCard = (props) => {
  const classes = customStyles();
  
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.detailText}>
          {props.detail.character} ({props.detail.label})
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

export default DetailCard;