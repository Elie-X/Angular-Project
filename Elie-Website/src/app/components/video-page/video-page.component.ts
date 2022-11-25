import { Component, OnInit } from '@angular/core';
import { initMovie, Movie } from 'src/app/movie';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  movie!: Movie;
  constructor() {
   }

  ngOnInit(): void {
    if ("data" in history.state) {
      this.movie = history.state.data.movie;
    } else {
      this.movie = initMovie;
    }
  }

}
