import { Component, OnInit, Input } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() movie!: Movie;
  preload: string = 'auto';
  mp4_src!: string;
  ogg_src!: string;
  webm_src!: string;
  constructor(private api:VgApiService) { }

  ngOnInit(): void {
    this.mp4_src = "../../../assets/videos/" + this.movie.id + ".mp4";
    //this.vgMedia.volume = 0.5
  }

  

  onPlayerReady(api: VgApiService) {
    this.api = api;

    this.api.volume = 0.2;
  }

}
