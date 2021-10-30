import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NewmovieComponent } from './newmovie/newmovie.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "movies", component: MoviesComponent},
  { path: "movies/:id", component: NewmovieComponent},
  { path: "newmovie", component: NewmovieComponent},
  { path: "", redirectTo: "/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
