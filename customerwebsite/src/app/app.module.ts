import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { StreamcontentComponent } from './streamcontent/streamcontent.component';
import { ContentComponent } from './home/content/content.component';
import { StreamComponent } from './home/content/stream/stream.component';
import { ProfileComponent } from './profile/profile.component';
import { PlaylistComponent } from './home/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    StreamcontentComponent,
    ContentComponent,
    StreamComponent,
    ProfileComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
