import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from "../../../app.config";
import {Serie} from "../../../models/serie";
import {Stream} from "../../../models/stream";

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {

  contentId: string;
  streamUrl: string

  constructor(private activatedroute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(data => {
      console.log(data);
      this.contentId = data.contentId;
    });

    this.getSerie();
  }

  getSerie(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETSTREAM + '?contentId=' + this.contentId)
      .subscribe((data: Stream) => {
        this.streamUrl = data.url;
        console.log(this.streamUrl);

        window.open(this.streamUrl, 'CNN_WindowName');
      }, error => console.log('oops', error) );
  }

}
