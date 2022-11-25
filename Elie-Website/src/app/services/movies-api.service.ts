import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  ids:number[] = [53400, 67713, 20529, 13707];

  /*movie_details = new Observable((observer) =>{
    let movie = this.http.get('https://api.themoviedb.org/3/movie/53400?api_key=5c07469ee5702e41091c72f07e7c4d9a').pipe
    observer.next(movie)
    //observer.next(this.http.get<Movie>('https://api.themoviedb.org/3/movie/53400?api_key=5c07469ee5702e41091c72f07e7c4d9a'))
    //observer.next(this.http.get('https://jsonplaceholder.typicode.com/posts'))
    /*for (let id of this.ids) {
      let movie = this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=5c07469ee5702e41091c72f07e7c4d9a')
      observer.next(movie)
    }
  })*/
  
  


  constructor(private http: HttpClient) {

  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=5c07469ee5702e41091c72f07e7c4d9a');
  }
}
