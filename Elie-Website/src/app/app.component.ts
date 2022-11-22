import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from './services/movies-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elie-Website';

  movieData = null;
  constructor(private movies_api:MoviesApiService) {}

  ngOnInit() {
    this.movies_api.getMovies().subscribe((data: any)=>{
      this.movieData = data;
      console.log(this.movieData)
    });
  }
}