export class AppConfig {

  static ApiBaseURL = 'http://localhost:8762';

  static ApiUrls = {
    LOGIN: '/login',
    REGISTER: '/customer/register',
    GETALLSERIES: '/content/serie/all',
    GETALLMOVIES: '/content/movie/all'
  };
  static LocalStorageKeys = {
    TOKEN: 'token',
  };

}
