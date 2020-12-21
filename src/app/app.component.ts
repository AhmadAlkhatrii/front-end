import { SessionStorageService } from './session-storage-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private _sessionStorage:SessionStorageService){

  }
  ngOnInit(){
    this._sessionStorage.set("guest");

  }
}
