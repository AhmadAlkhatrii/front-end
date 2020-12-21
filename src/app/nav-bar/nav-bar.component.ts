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

    if(this.loggedIn())
    this.username == sessionStorage.getItem("username");
    else
    this.username == "Guest";
  }

  loggedIn(): boolean{
    
    return !!sessionStorage.getItem("username") ;
  }

}
