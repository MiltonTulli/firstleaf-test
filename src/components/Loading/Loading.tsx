import React from 'react';
import classNames from 'classnames';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  root: {
    height: '100%'
  }
});

interface IComponentProps {
  className?: string;
}

const Component: React.FC<IComponentProps> = ({ className, ...rest }: IComponentProps) => {
  const classes = styles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classNames(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <CircularProgress style={{ textAlign: 'center' }} color="primary" />
      </Grid>
    </Grid>
  );
};

interface ILoadingProps {
  isLoading: boolean;
  children: any;
  className?: string;
}

export const Loading: React.FC<ILoadingProps> = ({
  isLoading,
  children,
  ...rest
}: ILoadingProps): JSX.Element => {
  return isLoading ? <Component {...rest} /> : children;
};
