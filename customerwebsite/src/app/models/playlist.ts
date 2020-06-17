import {Serie} from './serie';
import {Movie} from './movie';

export class Playlist {
  serieList: Serie[];
  movieList: Movie[];

  constructor(serieList, movieList){
    this.serieList = serieList;
    this.movieList = movieList;
  }
}
