import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useHistory, RouteComponentProps, Redirect } from 'react-router-dom';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import { Country } from '../../interfaces';
import R from '../../utils/routes';
import env from '../../config';
import useStyles from './CountryDetail.styles';

interface ICountryDetailProps
  extends RouteComponentProps<
    {},
    any,
    {
      country: Country;
    }
  > {
  countries: Country[];
}

export const CountryDetail: React.FunctionComponent<ICountryDetailProps> = (
  props: ICountryDetailProps
) => {
  const classes = useStyles();
  const history = useHistory();

  const country: Country = _get(props, 'location.state.country', {});

  if (_isEmpty(country)) return <Redirect to={R.APP} />;

  const latX = _get(country, 'latlng[0]', 0);
  const latY = _get(country, 'latlng[1]', 0);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${latX},${latY}&key=${env.googleApiKey}&zoom=4`;

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={() => history.push(R.APP)}>
        <ArrowBack /> back
      </Button>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} className={classes.textContainer}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12}>
              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item>
                  <Typography variant="body2">[{country.alpha3Code}]</Typography>
                </Grid>
                <Grid item>
                  <Typography data-testid="name" variant="h4">
                    {country.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    alt={`${country.name} flag`}
                    src={country.flag}
                    style={{ height: 30, width: 40 }}
                  ></img>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.labelValueItem}>
              <Typography align="center" variant="subtitle2">
                Capital:
              </Typography>
              <Typography data-testid="capital" align="center" variant="body2">
                {country.capital}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.labelValueItem}>
              <Typography align="center" variant="subtitle2">
                Currencies:
              </Typography>
              <Typography align="center" variant="body2">
                {country.currencies.map(c => c.symbol).join(' - ')}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.labelValueItem}>
              <Typography align="center" variant="subtitle2">
                Region:
              </Typography>
              <Typography align="center" variant="body2">
                {country.region}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.labelValueItem}>
              <Typography align="center" variant="subtitle2">
                Population:
              </Typography>
              <Typography align="center" variant="body2">
                {country.population}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.labelValueItem}>
              <Typography align="center" variant="subtitle2">
                Subregion:
              </Typography>
              <Typography align="center" variant="body2">
                {country.subregion}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.labelValueItem}>
              <Typography align="center" variant="subtitle2">
                Timezone/s:
              </Typography>
              <Typography align="center" variant="body2">
                {country.timezones.map((c: string) => c).join(' - ')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <iframe title={`${country.name} map`} className={classes.map} src={mapSrc}></iframe>
        </Grid>
      </Grid>
    </div>
  );
};
