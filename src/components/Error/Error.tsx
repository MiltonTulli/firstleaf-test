import React from 'react';
import { Typography, Paper, Divider } from '@material-ui/core';
import styles from './Error.styles';

interface IErrorProps {
  children: React.ReactNode;
  render?: () => JSX.Element;
  message: string;
  hasError: boolean;
  title?: string;
}
export const Error = (props: IErrorProps) => {
  const classes = styles();
  const { children, hasError, title = 'Error', message, render } = props;
  return hasError ? (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography data-testid="title" color="error" variant="h4">
          {title}
        </Typography>
        <Divider />
        <Typography className={classes.message} color="error" data-testid="message" variant="body2">
          {message}
        </Typography>
        {render && <div>{render()}</div>}
      </Paper>
    </div>
  ) : (
    <> {children} </>
  );
};
