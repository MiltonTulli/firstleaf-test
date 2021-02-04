import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import R from '../../utils/routes';
import styles from './Landing.styles';

export const Landing: React.FunctionComponent = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        FirstLeaf Test
      </Typography>
      <Link className={classes.link} to={R.APP}>
        <Typography variant="h6" className={classes.header}>
          Start
        </Typography>
      </Link>
    </div>
  );
};
