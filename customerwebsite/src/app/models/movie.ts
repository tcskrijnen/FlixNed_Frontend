export class Movie {
  id: string;
  movieId: string;
  title: string;
  description: string;
  duration: string;
  cast = new Map();
  year: string;
  imageUrl: string;

  constructor(id, movieId, title, description, duration, cast, year, imageUrl){
    this.id = id;
    this.movieId = movieId;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.cast = cast;
    this.year = year;
    this.imageUrl = imageUrl;
  }
}
