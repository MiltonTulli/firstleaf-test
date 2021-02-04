import * as React from 'react';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { actions } from '../../modules/countries';
import { IState } from '../../modules';
import { Country } from '../../interfaces';
import { Layout, Main, CountryDetail } from '../../components';
import { Switch, Route, Redirect } from 'react-router-dom';
import R from '../../utils/routes';

interface ICountriesMapStateToProps {
  loading: boolean;
  error: boolean;
  countries: Country[];
  countriesHasFilter: boolean;
}

interface ICountriesmapDispatchToProps {
  getAllCountries: actions.asyncThunkActionCreator;
  getCountriesByName: actions.asyncThunkActionCreatorWithParams<string>;
}
interface ICountriesProps extends ICountriesMapStateToProps, ICountriesmapDispatchToProps {}

export class Countries extends React.Component<ICountriesProps> {
  componentDidMount() {
    if (isEmpty(this.props.countries)) this.props.getAllCountries();
  }
  onSearch = (country: string = '') => {
    this.props.getCountriesByName(country);
  };

  public render() {
    const { countries, loading, error, countriesHasFilter } = this.props;
    return (
      <Layout handleSearch={this.onSearch} filter={countriesHasFilter}>
        <Switch>
          <Route
            exact
            path={R.APP}
            render={routerProps => (
              <Main
                {...routerProps}
                countries={countries}
                loading={loading}
                error={error}
                handleSearch={this.onSearch}
              />
            )}
          />
          <Route path={R.SINGLE_COUNTRY} component={CountryDetail} />
          <Redirect to={R.NOT_FOUND} />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = (state: IState): ICountriesMapStateToProps => ({
  loading: state.countriesReducer.loading,
  error: state.countriesReducer.error,
  countries: state.countriesReducer.countries,
  countriesHasFilter: state.countriesReducer.countriesHasFilter
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllCountries: actions.getAllCountries,
      getCountriesByName: actions.getCountriesByName
    },
    dispatch
  );

export default connect<ICountriesMapStateToProps, ICountriesmapDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
