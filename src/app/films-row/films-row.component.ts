import { Ifilm } from './../Ifilm';
import { Component, OnInit } from '@angular/core';
import { film } from './../film';
import { FilmService } from '../film.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-films-row',
  templateUrl: './films-row.component.html',
  styleUrls: ['./films-row.component.css']
  
})
export class FilmsRowComponent implements OnInit {

  // 1- recommonded films - using username if it exisit  
  // 2- all films 

  public start_index=0;
  public view_lenght=5;
  public recommondedFilmsAPI:Ifilm [] =[];
  public allFilmsAPI:Ifilm [] =[];
  public temp!:Ifilm;
  
  
  constructor(private _filmService: FilmService,private auth:AuthService) { }

  ngOnInit(): void {
    if(this.auth.loggedIn())// call recommonded films 
    {let u = this.auth.getUsername();
      if(u !=null)
        this._filmService.getRecommondedFilmsAPI(u)
        .subscribe(data => this.recommondedFilmsAPI = data);
  }
    this._filmService.getAllFilmsAPI()
      .subscribe(data => this.allFilmsAPI = data);
  }

  nextButton(){
    this.start_index++;
    this.recommondedFilmsAPI.pop();
    let u = this.auth.getUsername();
      if(u !=null)
      this._filmService.getRecommondedFilmAPI(u,this.start_index+this.view_lenght)
      .subscribe(data =>{ this.recommondedFilmsAPI.push(data)});

      
  } 
  backButton(){
    if(this.start_index>0)
    this.start_index--;
  }
  

}
