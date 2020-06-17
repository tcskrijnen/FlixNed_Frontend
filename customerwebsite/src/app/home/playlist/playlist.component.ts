import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../app.config';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Playlist} from '../../models/playlist';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlist: Playlist;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.getPlaylist();
  }

  getPlaylist(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETPLAYLIST + '?userId=' +
        this.cookieService.get('userId'))
      .subscribe((data: Playlist) => {
        this.playlist = data;
        console.log(this.playlist);
      }, error => console.log('oops', error) );
  }

  deleteFromPlaylist(): void {

  }

}
