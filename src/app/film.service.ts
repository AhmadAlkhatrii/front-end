import { msgRes } from './msgRes';

import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { Ifilm } from './Ifilm';
import {Observable} from 'rxjs';
import { loginUser } from './loginUser';



@Injectable({
  providedIn: 'root'
})


export class FilmService {
    private _url:string ="http://localhost:8080/films";
    private _url_singleFilm:string ="http://localhost:8080/film/";
    private _url_loginUser:string ="http://localhost:8080/loginUser";
  constructor(private http: HttpClient) { }

  getAllFilmsAPI(): Observable <Ifilm[]> {
      return this.http.get <Ifilm[]> (this._url);
  }
  getFilmAPI(fid:number): Observable <Ifilm> {
    return this.http.get <Ifilm> (this._url_singleFilm+fid);
}

 

    loginUserReq(u:loginUser):   Observable<msgRes>  {
      let headers = new HttpHeaders();
      headers.set("access-control-allow-origin","*");
      let header = new HttpHeaders().set("access-control-allow-origin","*");
      
    
    return  this.http.post <msgRes> (this._url_loginUser ,u);

}



}






