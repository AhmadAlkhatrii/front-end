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
  constructor(private http: HttpClient) { }

  getAllFilmsAPI(): Observable <Ifilm[]> {
      return this.http.get <Ifilm[]> (this._url);
  }
  getFilmAPI(fid:number): Observable <Ifilm> {
    return this.http.get <Ifilm> (this._url_singleFilm+fid);
}

getRecommondedFilmsAPI(username:string): Observable <Ifilm[]> {
  return this.http.get <Ifilm[]> (this._url_recommondedFilms+username);
}

}






