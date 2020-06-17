import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../app.config';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movie';
import {Serie} from '../models/serie';
import {Playlist} from '../models/Playlist';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];
  series: Serie[];
  playlist: Playlist;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.getAllSeries();
    this.getPlayList();
  }

  getAllMovies(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETALLMOVIES)
      .subscribe((data: Array<Movie>) => {
        this.movies = data;
        console.log(this.movies);
      }, error => console.log('oops', error) );
  }

  getAllSeries(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETALLSERIES)
      .subscribe((data: Array<Serie>) => {
        this.series = data;
        console.log(this.series);
      }, error => console.log('oops', error) );
  }

  getPlayList(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETPLAYLIST + '?userId=' + this.cookieService.get('userId'))
      .subscribe((data: Playlist) => {
        this.playlist = data;
        console.log(this.playlist);
      }, error => console.log('oops', error) );
  }

}
