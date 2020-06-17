import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../app.config';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movie';
import {Serie} from '../models/serie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];
  series: Serie[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.getAllSeries();
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

}
