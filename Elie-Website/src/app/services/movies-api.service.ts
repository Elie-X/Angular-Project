import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { initMovie, Movie } from '../movie';
import { TestScheduler } from 'rxjs/testing';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  //TODO: Générer la liste des vidéos disponibles avec le dossier comprenant les vidéos
  ids:number[] = [53400, 67713, 13707, 151471];
  
  


  constructor(private http: HttpClient) {
  }

  getMovies(): Movie[] {
    let movieList:Movie[] = [];
    for (let id of this.ids) {
      let tempMovie = Object.create(initMovie);
      this.getMovieDetails(id).subscribe((data: any) => {
        if (data.backdrop_path === null) {
          tempMovie.backdrop_path = "../../assets/photos/default.png"
        } else {
          tempMovie.backdrop_path = "https://image.tmdb.org/t/p/original/" + data.backdrop_path
        }
        tempMovie.title = data.title;
        tempMovie.id = data.id;
        tempMovie.overview = data.overview;
        tempMovie.poster_path = data.poster_path;
        tempMovie.release_date = data.release_date;
        tempMovie.runtime = data.runtime;
      })
      movieList.push(tempMovie);
    }
    return movieList;
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=5c07469ee5702e41091c72f07e7c4d9a');
  }
}
