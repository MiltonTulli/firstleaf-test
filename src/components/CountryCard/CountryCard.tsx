import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { Country } from '../../interfaces';
import useStyles from './CountryCard.styles';

interface ICountryCardProps {
  country: Country;
  handleClick: (country: Country) => void;
}

export const CountryCard: React.FC<ICountryCardProps> = (props: ICountryCardProps) => {
  const { country, handleClick } = props;
  const classes = useStyles({ backgroundUrl: country.flag });

  return (
    <div data-testid="card" onClick={() => handleClick(country)} className={classes.root}>
      <Card className={classes.root} elevation={10}>
        <CardActionArea>
          <CardContent>
            <div className={classes.contentWrapper}>
              <img src={country.flag} className={classes.flag} alt={`${country.name} flag`} />
              <Typography gutterBottom variant="body1" component="h1" align="center">
                {country.name}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
