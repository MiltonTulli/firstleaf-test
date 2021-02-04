/* istanbul ignore file */
import axios from 'axios';
import env from '../config';

const API = axios.create({
  baseURL: env.baseUrl
});

const fetchAllCountries = () => API.get(`/all`);
const fetchCountriesByPartialName = (name: string) => API.get(`/name/${name}`);

export { API as default, fetchAllCountries, fetchCountriesByPartialName };
