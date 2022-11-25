import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoPageComponent } from './components/video-page/video-page.component';

//Add paths to const.
const routes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path: 'VideoPlayer', component: VideoPageComponent
  }, {
    path: 'Favorites', component: FavoritesComponent
  }, {
    path: 'VideoList', component: VideoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
