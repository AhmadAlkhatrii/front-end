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
    private _url_recommondedFilms:string ="http://localhost:8080/recommondedfilms/";
    private _url_singleFilm:string ="http://localhost:8080/film/";
    private _url_recommondedFilm:string ="http://localhost:8080/recommondedfilm/";
   
    private _url_recommondedFilmsInfo:string ="http://localhost:8080/recommondedfilmsinfo/";
    private view_lenght:string ="/6";
  constructor(private http: HttpClient) { }

  getAllFilmsAPI(): Observable <Ifilm[]> {
      return this.http.get <Ifilm[]> (this._url);
  }
  getFilmAPI(fid:number): Observable <Ifilm> {
    return this.http.get <Ifilm> (this._url_singleFilm+fid);
}

getRecommondedFilmsAPI(username:string): Observable <Ifilm[]> {
  return this.http.get <Ifilm[]> (this._url_recommondedFilms+username+this.view_lenght);
}


getRecommondedFilmAPI(username:string,id:number): Observable <Ifilm> {
  return this.http.get <Ifilm> (this._url_recommondedFilm+username+"/"+id);
}

getRecommondedFilmInfoAPI(username:string,keyword:string): Observable <msgRes> {
  return this.http.get <msgRes> (this._url_recommondedFilmsInfo+username+"/"+keyword);
}

}






