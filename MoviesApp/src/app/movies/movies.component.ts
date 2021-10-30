import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieList } from '../models/movie-list.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: MovieList = new MovieList();

  params = {
    page: 1,
    pageSize: 6,
    sort: "",
    sortDirection: "asc"
  }

  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies():void{
    this.service.getMovies(this.params).subscribe((data: MovieList) => {
      this.movies = data;
    })
  }

  updatePage(newPage: number):void{
    this.params.page = newPage;
    this.getMovies();
  }

  sortDir():void{
    if(this.params.sortDirection == "asc"){
      this.params.sortDirection = "desc";
    } else{
      this.params.sortDirection = "asc";
    }
    this.getMovies();
  }

}
