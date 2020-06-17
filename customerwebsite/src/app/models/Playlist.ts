export class Playlist {
  series = new Map();
  movies = new Map();

  constructor(series, movies){
    this.series = series;
    this.movies = movies;
  }
}
