import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from './services/movies-api.service';
import { Observable, map } from 'rxjs';
import { initMovie, Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Elie-Website';

  movie_list!: Movie[];

  constructor(private movies_api:MoviesApiService) {
  }

  ngOnInit() {
    this.movie_list = this.movies_api.getMovies()
    console.log(this.movie_list)
  }


}