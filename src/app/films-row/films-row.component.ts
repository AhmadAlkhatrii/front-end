import { Component, OnInit } from '@angular/core';
import { film } from './../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-films-row',
  templateUrl: './films-row.component.html',
  styleUrls: ['./films-row.component.css']
  
})
export class FilmsRowComponent implements OnInit {

  public filmsAPI:film[] =[];
  
  constructor(private _filmService: FilmService) { }

  ngOnInit(): void {

    this._filmService.getAllFilmsAPI()
      .subscribe(data => this.filmsAPI = data);
      

  }

}
