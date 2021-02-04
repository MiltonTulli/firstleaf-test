/* istanbul ignore file */
import defaultTo from 'lodash/defaultTo';

export default {
  baseUrl: defaultTo(process.env.REACT_APP_API_BASE_URL, 'SET-UP-API-URL'),
  googleApiKey: defaultTo(process.env.REACT_APP_GOOGLE_API_KEY, 'SET-UP-GOOGLE-API-KEY')
};
