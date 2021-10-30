import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MovieList } from '../models/movie-list.model';
import { Movie } from '../models/movie.model';
import { Genre, GenreList } from '../models/genres.model';

const baseURL = 'http://localhost:3000/api/movies';
const baseURL2 = 'http://localhost:3000/api/genres';
const baseURL3 = 'http://localhost:3000/api/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(params?:any): Observable<MovieList> {
    let queryParams = {}

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("page", params.page || "")
        .set("pageSize", params.pageSize || "")
        .set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "") 
      }
    }

    return this.http.get(baseURL, queryParams).pipe(map((data: any) => {
      return new MovieList(data);
    }))
  }

  getOne(id :number) :Observable<Movie>{
		return this.http.get(`${baseURL}/${id}`).pipe(map(
			data => { return new Movie(data);}
		));
  }

  getGenres(): Observable<GenreList> {
    return this.http.get(baseURL2).pipe(map((data: any) => {
      return new GenreList(data);
    }))
  }

  postMovie(movie: Movie):Observable<Movie>{
		return this.http.post(baseURL3, movie).pipe(map(
			data => { return new Movie(data);}
		));
  }

  updateMovie(movie: Movie):Observable<Movie>{
		return this.http.put(`${baseURL}/${movie._id}`, movie).pipe(map(
			data => { return new Movie(data);}
		));
  }

  postGenre(genre: Genre):Observable<Genre>{
		return this.http.post(baseURL2, genre).pipe(map(
			data => { return new Genre(data);}
		));
  }

}
