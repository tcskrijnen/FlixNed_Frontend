export class AppConfig {

  static ApiBaseURL = 'http://localhost:8762';

  static ApiUrls = {
    LOGIN: '/login',
    REGISTER: '/customer/register',
    GETUSER: '/customer/user/getUserByEmail',
    GETALLSERIES: '/content/serie/all',
    GETALLMOVIES: '/content/movie/all',
    GETPLAYLIST: '/content/playlist/getPlaylist',
    GETMOVIE: '/content/movie/getMovie',
    GETSERIE: '/content/serie/getSerie',
    GETSTREAM: '/stream/getStream',
    ADDMOVIETOPLAYLIST: '/content/movie/movieToPlaylist',
    ADDSERIETOPLAYLIST: '/content/serie/serieToPlaylist'
  };
  static LocalStorageKeys = {
    TOKEN: 'token',
  };

}
