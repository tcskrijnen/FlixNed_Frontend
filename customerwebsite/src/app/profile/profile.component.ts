import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../app.config';
import {Playlist} from '../models/playlist';
import {CookieService} from 'ngx-cookie-service';
import {Profile} from '../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETUSERBYID + '?userId=' +
        this.cookieService.get('userId'))
      .subscribe((data: Profile) => {
        this.profile = data;
      }, error => console.log('oops', error) );
  }

}
