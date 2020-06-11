export class Serie {
  id: string;
  serieId: string;
  title: string;
  description: string;
  episodeTitle: string;
  episode: string;
  season: string;
  year: string;
  duration: string;
  cast = new Map();
  imageUrl: string;


  constructor(id, serieId, title, description, episodeTitle, episode, season, year, duration, cast, imageUrl){
    this.id = id;
    this.title = title;
    this.description = description;
    this.serieId = serieId;
    this.episodeTitle = episodeTitle;
    this.episode = episode;
    this.season = season;
    this.year = year;
    this.duration = duration;
    this.cast = cast;
    this.imageUrl = imageUrl;
  }
}
