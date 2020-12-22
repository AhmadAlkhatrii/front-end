import { Component, OnInit } from '@angular/core';
import { film } from './../film';
import { FilmService } from '../film.service';
import { AuthService } from '../auth.service';
import { Ifilm } from '../Ifilm';

@Component({
  selector: 'app-films-row',
  templateUrl: './films-row.component.html',
  styleUrls: ['./films-row.component.css']
  
})
export class FilmsRowComponent implements OnInit {

  // 1- recommonded films - using username if it exisit  
  // 2- all films 

  public recommondedFilmsAPI:Ifilm [] =[];
  public allFilmsAPI:Ifilm [] =[];
  
  
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
  

}
