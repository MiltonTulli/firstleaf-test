import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Country } from '../../interfaces';
import { CountryCard, Loading, Error } from '..';
import { useHistory } from 'react-router-dom';
import useStyles from './Main.styles';

interface IMainProps {
  loading: boolean;
  error: boolean;
  countries: Country[];
  handleSearch: () => void;
}
export const Main: React.FunctionComponent<IMainProps> = (props: IMainProps) => {
  const { countries, loading, error } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleCountryCardClick = (country: Country) => {
    history.push(`/app/country/${country.alpha3Code}`, { country });
  };

  return (
    <div className={classes.root}>
      <Loading isLoading={loading}>
        <Error
          hasError={error}
          title="No results"
          message="An error ocurr while fetching api, or no results found. Please try again"
          render={() => (
            <Grid
              data-testid="render-error"
              container
              justify="flex-end"
              className={classes.errorBtnContainer}
            >
              <Grid item>
                <Button variant="outlined" color="primary" onClick={() => props.handleSearch()}>
                  Retry
                </Button>
              </Grid>
            </Grid>
          )}
        >
          {countries &&
            countries.map((country: Country) => {
              return (
                <CountryCard
                  key={country.alpha3Code}
                  country={country}
                  handleClick={handleCountryCardClick}
                />
              );
            })}
        </Error>
      </Loading>
    </div>
  );
};
