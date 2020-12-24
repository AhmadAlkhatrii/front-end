import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Inject} from '@angular/core';
import { film } from '../film';
import { FilmService } from '../film.service';
import {OverlayContainer} from '@angular/cdk/overlay';


export interface DialogData {
  fid:number;
}

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  public f!:film;
  constructor(private _filmService: FilmService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
     ) {
       
     }


  ngOnInit(): void {
    this._filmService.getFilmAPI(this.data.fid)
    .subscribe(data => this.f = data);
    
  }

}
