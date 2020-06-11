export class Serie {
  id: string;
  serieId: string;
  title: string;
  description: string;
  episodeName: string;
  episode: string;
  season: string;
  year: string;
  duration: string;
  cast = new Map();
  imageUrl: string;


  constructor(id, serieId, title, description, episodeName, episode, season, year, duration, cast, imageUrl){
    this.id = id;
    this.title = title;
    this.description = description;
    this.serieId = serieId;
    this.episodeName = episodeName;
    this.episode = episode;
    this.season = season;
    this.year = year;
    this.duration = duration;
    this.cast = cast;
    this.imageUrl = imageUrl;
  }
}
