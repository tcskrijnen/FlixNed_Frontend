import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppConfig} from '../../app.config';
import {Movie} from '../../models/movie';
import {HttpClient} from '@angular/common/http';
import {Serie} from '../../models/serie';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  serieId: string;
  movieId: string;

  movie: Movie;
  serie: Serie;

  constructor(private activatedroute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(data => {
      console.log(data);

      if (data.serieId === data.serieId){
        this.serieId = data.serieId.toString();
      }
      else{
        this.movieId = data.movieId.toString();
      }
    });
  }

  getMovie(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETMOVIE)
      .subscribe((data: Movie) => {
        this.movie = data;
        console.log(this.movie);
      }, error => console.log('oops', error) );
  }

  getSerie(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETSERIE)
      .subscribe((data: Serie) => {
        this.serie = data;
        console.log(this.serie);
      }, error => console.log('oops', error) );
  }

}
