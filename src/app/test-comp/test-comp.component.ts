import { Component, OnInit, VERSION, NgModule } from '@angular/core';
import { film } from './../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css',
 ],
   
})
export class TestCompComponent implements OnInit  {

  
   
  public filmsAPI:film[] =[];
  
  constructor(private _filmService: FilmService) { }

  ngOnInit(): void {

    this._filmService.getAllFilmsAPI()
      .subscribe(data => this.filmsAPI = data);
      

  }

}
