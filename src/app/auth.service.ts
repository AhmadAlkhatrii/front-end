import { Injectable } from '@angular/core';
import { loginUser } from './loginUser';
import {Observable} from 'rxjs';
import { msgRes } from './msgRes';
import {HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // URLs we needed

  private _url_loginUser:string ="http://localhost:8080/loginUser";


  constructor(private http: HttpClient) { }

  // Login Request 
  loginUserReq(u:loginUser):   Observable<msgRes>  {
    let headers = new HttpHeaders();
    headers.set("access-control-allow-origin","*");
    let header = new HttpHeaders().set("access-control-allow-origin","*");
    
  return  this.http.post <msgRes> (this._url_loginUser ,u);

}

loggedIn(){ // if username is exsist it will return true otherwise false 
  return !!localStorage.getItem('username')
}

getUsername(){ // get username
  return localStorage.getItem('username')
}


}
