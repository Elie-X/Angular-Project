import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent implements OnInit {
  @Input() movie!: Movie;
  constructor() { }

  ngOnInit(): void {
    console.log(this.movie.backdrop_path)
  }

}