export class Movie {
  id: string;
  movieId: string;
  title: string;
  duration: string;
  cast = new Map();
  year: string;

  constructor(id, movieId, title, duration, cast, year){
    this.id = id;
    this.movieId = movieId;
    this.title = title;
    this.duration = duration;
    this.cast = cast;
    this.year = year;
  }
}
