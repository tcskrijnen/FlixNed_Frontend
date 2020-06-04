export class Serie {
  id: string;
  serieId: string;
  title: string;
  episodeTitle: string;
  episode: string;
  season: string;
  year: string;
  duration: string;
  cast = new Map();


  constructor(id, serieId, title, episodeTitle, episode, season, year, duration, cast){
    this.id = id;
    this.serieId = serieId;
    this.episodeTitle = episodeTitle;
    this.episode = episode;
    this.season = season;
    this.year = year;
    this.duration = duration;
    this.cast = cast;
  }
}
