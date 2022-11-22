import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private http:HttpClient) { }

  getMovies(this: MoviesApiService){
    var ids:number[] = [53400, 67713, 20529, 13707];
    var movies:Object[]= [];
    for (let id of ids) {
      movies.push(this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=5c07469ee5702e41091c72f07e7c4d9a'));
    };
    return movies;
  }
}

