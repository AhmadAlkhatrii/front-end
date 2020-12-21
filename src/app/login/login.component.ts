 
import { loginUserI } from './../loginUserI';
import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { loginUser } from './../loginUser';
import { templateJitUrl } from '@angular/compiler';
import { msgRes } from '../msgRes';
import {MatInputModule} from '@angular/material/input';
import { SessionStorageService } from '../session-storage-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public input_username="";
  public input_password="";
  
  result!:loginUserI;
  user!:loginUserI;

  userMsg!:msgRes;
  

  loginUserData={};
  constructor(private _filmService: FilmService,private _sessionStorage:SessionStorageService) { 
     
  }
  
  

  ngOnInit(): void {
  }

  login() {

    let temp = new loginUser ();
    temp.username = this.input_username;
    temp.password = this.input_password;
    

    console.log(temp);

    
     this._filmService.loginUserReq(temp)
     .subscribe( data => this.userMsg = data );
     console.log(this.userMsg);

     if(this.userMsg.result == " OK "){
     this._sessionStorage.set(this.input_username); 
     console.log("we are asign session username");
     }else
     console.log("Not OK");
     

  }
  get username(): any {
    return localStorage.getItem("username");
  }
}
