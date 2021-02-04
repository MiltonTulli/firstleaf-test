export interface Country {
  name: string;
  alpha2Code: string; // 'AF';
  alpha3Code: string; // 'AFG';
  capital: string; // 'Kabul';
  region: string; // 'Asia';
  subregion: string; // 'Southern Asia';
  population: 27657145;
  latlng: [33.0, 65.0];
  demonym: string; // 'Afghan';
  area: 652230.0;
  gini: 27.8;
  timezones: string[]; //['UTC+04:30'];
  borders: string[]; //['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'];
  nativeName: string; //'افغانستان';
  currencies: Array<{
    code: string;
    name: string;
    symbol: string; //'؋';
  }>;

  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
  flag: string; // 'https://restcountries.eu/data/afg.svg';
}
