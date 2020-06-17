import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import {StreamcontentComponent} from './streamcontent/streamcontent.component';
import {ContentComponent} from './home/content/content.component';
import {StreamComponent} from './home/content/stream/stream.component';
import {ProfileComponent} from './profile/profile.component';
import {PlaylistComponent} from './home/playlist/playlist.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registratie', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/content', component: ContentComponent },
  { path: 'home/content/stream', component: StreamComponent },
  { path: 'home/playlist', component: PlaylistComponent },
  { path: 'stream', component: StreamcontentComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
