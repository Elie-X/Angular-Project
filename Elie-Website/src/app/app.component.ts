import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from './services/movies-api.service';
import { Observable, map } from 'rxjs';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Elie-Website';/*
  movieData: any;*/

  //posts: Movie | undefined;
  data: any;

  constructor(private movies_api:MoviesApiService) {
  }

  ngOnInit() {
    this.movies_api.movie_details.subscribe((data: any) => {
      //this.posts = data;
      this.data = data;
    });
  }
}