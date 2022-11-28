import { Component, OnInit } from '@angular/core';
import { initMovie, Movie } from 'src/app/movie';
import { Subscription } from "rxjs";
import { UiVideoPlayerService } from 'src/app/services/ui-video-player.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  movie!: Movie;
  showVideo!: boolean;
  subscription!: Subscription;
  constructor(private uiVideoPlayerService: UiVideoPlayerService, private location: Location) {
    this.subscription = this.uiVideoPlayerService.onToggle().subscribe((value) => (this.showVideo = value));
   }

  ngOnInit(): void {
    if ("data" in history.state) {
      this.movie = history.state.data.movie;
    } else if (localStorage.getItem("currentMovie")) {
      this.movie = JSON.parse(localStorage.getItem("currentMovie") || "{}");
    } else {
      this.movie = initMovie;
    }
  }

  toggleShowVideo() {
    this.uiVideoPlayerService.toggleShowVideo();
  }
}
