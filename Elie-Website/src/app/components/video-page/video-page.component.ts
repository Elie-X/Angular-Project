
import { Component, OnInit } from '@angular/core';
import { initMovie, Movie } from 'src/app/movie';


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
    } else if (localStorage.getItem("currentMovie")) {
      this.movie = JSON.parse(localStorage.getItem("currentMovie") || "{}");
    } else {
      this.movie = initMovie;
    }
  }

}
