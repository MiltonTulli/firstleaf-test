import React from 'react';
import classNames from 'classnames';
import _isEqual from 'lodash/isEqual';
import { Link, useRouteMatch } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { SearchInput, useDimensions } from '..';
import useStyles from './Layout.styles';
import R from '../../utils/routes';

interface ILayoutProps {
  children: React.ReactNode;
  handleSearch: (country: string) => void;
  filter?: boolean;
}

export const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  const { children, handleSearch, filter = false } = props;
  const { isMobile } = useDimensions();
  const classes = useStyles();
  const match = useRouteMatch();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classNames(classes.appBar)}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center" className={classes.container}>
            {!isMobile && (
              <Grid item sm="auto">
                <Link to={R.APP} className={classes.link}>
                  <Typography variant="h6">Countries</Typography>
                </Link>
              </Grid>
            )}
            {match.isExact && _isEqual(match.url, R.APP) && (
              <Grid item sm="auto">
                <SearchInput handleSearch={handleSearch} filter={filter} />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={classNames(classes.content)}>{children}</main>
    </div>
  );
};
