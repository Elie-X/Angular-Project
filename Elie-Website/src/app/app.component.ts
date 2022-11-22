import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { MoviesApiService } from './services/movies-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elie-Website';

  movieData:any[] = [];
  constructor(private movies_api:MoviesApiService) {}

  ngOnInit() {
    this.movies_api.movie_details.subscribe((data: any)=>{
      this.movieData.push(data)
      console.log(this.movieData)
    });
  }
}