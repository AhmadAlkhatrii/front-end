import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SessionStorageService } from '../session-storage-service.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username:any;
  isItUser:boolean= false;
  
  constructor(private _sessionStorage:SessionStorageService, private auth:AuthService ) {}

  ngOnInit(): void {

    if(this.auth.loggedIn())
    {
    this.username = localStorage.getItem("username");
    this.isItUser = true;
  }
    else
    {
    this.username = "Guest";
    this.isItUser = true;
    }

    
  }


}
