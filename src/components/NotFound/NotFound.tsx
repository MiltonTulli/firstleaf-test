import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import R from '../../utils/routes';

const styles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: theme.spacing(2)
  }
}));

export const NotFound: React.FunctionComponent = () => {
  const classes = styles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h4">
        Ups!, Page Not Found
      </Typography>
      <Button variant="outlined" onClick={() => history.push(R.APP)}>
        Go to App
      </Button>
    </div>
  );
};
