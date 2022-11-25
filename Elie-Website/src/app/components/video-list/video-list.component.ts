import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from 'src/app/services/movies-api.service';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {



  movie_list!: Movie[];

  constructor(private movies_api:MoviesApiService) { }

  

  ngOnInit() {
    this.movie_list = this.movies_api.getMovies()
    console.log(this.movie_list)
  }

}
