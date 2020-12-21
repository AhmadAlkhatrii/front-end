import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../session-storage-service.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public username="";
  
  constructor(private _sessionStorage:SessionStorageService ) { 

  }

  ngOnInit(): void {
    
    this.username= this._sessionStorage.get();
  }

  loggedIn(): boolean{
    

    this.username === localStorage.getItem("username");

    return !!localStorage.getItem("username") ;
  }

}
