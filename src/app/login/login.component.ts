 
import { loginUserI } from './../loginUserI';
import { Component, OnInit } from '@angular/core';
import { loginUser } from './../loginUser';
import { msgRes } from '../msgRes';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public input_username="";
  public input_password="";
  public display="";
  public responseMsg="";
  public responseReceived:boolean=false;
  
  result!:loginUserI;
  user!:loginUserI;

  userMsg!:msgRes;
  
  loginUserData={};
  constructor(private auth:AuthService,private _route:Router) { }
  

  ngOnInit(): void {
  }
  

  login() {
    let temp = new loginUser();
    temp.username = this.input_username;
    temp.password = this.input_password;
    
    console.log(temp);

    this.auth.loginUserReq(temp)
     .subscribe( data => {this.userMsg = data;
                          console.log(data);
                          this.responseReceived = true;
                          this.isItAuth(this.userMsg.result)} );
     
    /* 
     if(this.userMsg.result == " OK "){
       sessionStorage.setItem('username',this.input_username)
       this.display = JSON.parse(sessionStorage.getItem('username') || '{}');
      console.log("we are asign session username");
     }else
     console.log("Not OK");
     */

  }

  isItAuth(result:String){ 
    // display the username 
    // save the username
    if(result == " OK "){
    this.display = this.input_username;
    localStorage.setItem("username",this.input_username);
    this._route.navigateByUrl("home");
    }
    else
    {
      this.display = this.userMsg.msg.toString();
    }

  }
 
}
