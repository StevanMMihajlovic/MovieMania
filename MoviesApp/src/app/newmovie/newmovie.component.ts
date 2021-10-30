import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre, GenreList } from '../models/genres.model';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.css']
})
export class NewmovieComponent implements OnInit {

  newMovie: Movie = new Movie();
  newGenre: Genre = new Genre();
  genres: GenreList = new GenreList();
  id:number = 0;
  show: boolean = false;

  constructor(private service: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      if(this.id != undefined){
        this.getOne();
      }
      this.getGenres();
    });
  }

  getOne():void{
    this.service.getOne(this.id).subscribe((data: Movie) => {
      this.newMovie = data;
    });
  }

  getGenres():void{
    this.service.getGenres().subscribe( data => {
      this.genres = data;
    })
  }

  showMore():void{
    if(this.show == false){
      this.show = true;
    } else{
      this.show = false;
    }
  }

  submitGenre():void{
    if(this.newGenre.name == ""){
      window.alert("Unsuccesfull add of new genre, form is not valid!");
      return;
    } else{
        this.service.postGenre(this.newGenre).subscribe(
          data => {
            this.newMovie.genre = this.newGenre.name;  
            this.show = false;
            this.newGenre = new Genre();
            this.getGenres();
            window.alert("Succesfull add of new genre!");
            },
            error => {
              console.log("error: " + error.statusText);
            }
        );
    }
  }

  submitMovie():void{

    if(this.newMovie.name == "" || this.newMovie.description == "" || this.newMovie.year == "" || this.newMovie.year.length < 4 || this.newMovie.description.length < 30 ||  this.newMovie.description.length > 250){
      window.alert("Unsuccesfull add of new movie, form is not valid!");
      return;
    }

		if(this.id == undefined){
			this.service.postMovie(this.newMovie).subscribe(
        data => {
        this.newMovie = new Movie();
        window.alert("Succesfull add of new movie!");
        this.router.navigate(['movies/']);
        },
        error => {
          console.log("error: " + error.statusText);
        }
      );
		} else {  
		  	this.service.updateMovie(this.newMovie).subscribe(
				  data => {
            this.newMovie = new Movie();
            window.alert("Succesfull update of existing movie!");
					  this.router.navigate(['movies/']);
				  },
				  error => {
					  console.log("error: " + error.statusText);
				  }
			  );
		}
  }

}
