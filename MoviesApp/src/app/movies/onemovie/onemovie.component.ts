import { Component, Input, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/movie-list.model';

@Component({
  selector: 'app-onemovie',
  templateUrl: './onemovie.component.html',
  styleUrls: ['./onemovie.component.css']
})
export class OnemovieComponent implements OnInit {

  @Input() movies: MovieList = new MovieList;

  constructor() { }

  ngOnInit(): void {
  }

}
