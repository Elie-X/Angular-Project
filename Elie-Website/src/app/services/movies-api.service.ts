import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private http:HttpClient) { }
  ids:number[] = [53400, 67713, 20529, 13707];

  movie_details = new Observable((observer) =>{
    console.log("Enter observer")
    for (let id of this.ids) {
      let movie = this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=5c07469ee5702e41091c72f07e7c4d9a')
      observer.next(movie)
    }
  })
}

