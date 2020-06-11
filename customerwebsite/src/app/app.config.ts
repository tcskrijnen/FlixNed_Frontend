export class AppConfig {

  static ApiBaseURL = 'http://localhost:8762';

  static ApiUrls = {
    LOGIN: '/login',
    REGISTER: '/customer/register',
    GETALLSERIES: '/content/serie/all',
    GETALLMOVIES: '/content/movie/all',
    GETMOVIE: '/content/movie/getMovie',
    GETSERIE: '/content/serie/getSerie',
    GETSTREAM: '/stream/getStream'
  };
  static LocalStorageKeys = {
    TOKEN: 'token',
  };

}
