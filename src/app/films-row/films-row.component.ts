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

  public view_lenght=5;
  public start_index= this.view_lenght;
  public recommondedFilmsAPI:Ifilm [] =[];
  public allFilmsAPI:Ifilm [] =[];
  public temp!:Ifilm;
  public size=10;
  
  
  constructor(private _filmService: FilmService,private auth:AuthService) { }

  ngOnInit(): void {
    if(this.auth.loggedIn())// call recommonded films 
    {let u = this.auth.getUsername();
      if(u !=null){
        this._filmService.getRecommondedFilmsAPI(u)
        .subscribe(data => this.recommondedFilmsAPI = data);
        this._filmService.getRecommondedFilmInfoAPI(u,"size")
        .subscribe(data =>  this.size = parseInt( data.msg.toString() ) );
      }
  }
    this._filmService.getAllFilmsAPI()
      .subscribe(data => this.allFilmsAPI = data);

      // get recommonded size
      
  }

  nextButton(){

    this.start_index++;
    this.recommondedFilmsAPI.shift();
    if( this.start_index > this.size)
      this.start_index = 1;

    let u = this.auth.getUsername();
      if(u !=null)
      this._filmService.getRecommondedFilmAPI(u,this.start_index)
      .subscribe(data =>{ this.recommondedFilmsAPI.push(data)});
      
  } 
  backButton(){

    let backIndex = this.start_index - this.view_lenght;
    
    if (backIndex <1)
    backIndex = backIndex+this.size;
    this.recommondedFilmsAPI.pop();

    let u = this.auth.getUsername();
      if(u !=null)
      this._filmService.getRecommondedFilmAPI(u,backIndex)
      .subscribe(data =>{ this.recommondedFilmsAPI.unshift(data)});

  this.start_index--;
  if( (this.start_index)  == 0 )
  this.start_index =  this.size;
  
  
  }
}
