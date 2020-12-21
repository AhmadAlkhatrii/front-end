
import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import {person} from './../person'
import { film } from './../film';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

   
  p: person ={
    id:1,
    name:"ahmed"
  } 
  public film!:film ;
  public films:film[] =[];
  public filmsAPI:film[] =[];
  public fid:number=1;
  
  course = "Ahmed Saeed Alkhateri :) :)";
  constructor(private _filmService: FilmService) { }

  ngOnInit(): void {
    
    

    this._filmService.getAllFilmsAPI()
      .subscribe(data => this.filmsAPI = data);

      this._filmService.getFilmAPI(this.fid)
      .subscribe(data => this.film = data);

  }

  updateFilm(): void{
    this._filmService.getFilmAPI(this.fid)
      .subscribe(data => this.film = data);
  }

  

}
