import { msgRes } from './msgRes';

import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { Ifilm } from './Ifilm';
import {Observable} from 'rxjs';
import { loginUserI } from './loginUserI';
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

  getAllFilms(){

    return [
      {
          "title": "The Godfather",
          "dirName": "Ahmed Alkhateri",
          "genre": "action",
          "year": "1997",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 4.66,
          "fid": 3
      },
      {
          "title": "GreenLand",
          "dirName": "Gerard Butler",
          "genre": "action",
          "year": "2020",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 4.6,
          "fid": 1
      },
      {
          "title": "Spider-Man 3",
          "dirName": "Beter Farmer",
          "genre": "action",
          "year": "2021",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 4.6,
          "fid": 2
      },
      {
          "title": "Black Panther",
          "dirName": "John Cena",
          "genre": "action",
          "year": "2018",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 4.56,
          "fid": 4
      },
      {
          "title": "Joker",
          "dirName": "Marvel Crew",
          "genre": "comedy",
          "year": "2019 OCT 4",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 3.756,
          "fid": 7
      },
      {
          "title": "007 No Time To Die",
          "dirName": "Marvel Crew",
          "genre": "comedy",
          "year": "2020 NOV",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 3.544,
          "fid": 8
      },
      {
          "title": "Batman: The Dark knight Rises",
          "dirName": "DC ",
          "genre": "action",
          "year": "2013 JULY 18",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 3.444,
          "fid": 10
      },
      {
          "title": "Captain Marvel",
          "dirName": "Marvel Crew",
          "genre": "action",
          "year": "2017",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 2.56,
          "fid": 5
      },
      {
          "title": "Spider-Man Far From Home",
          "dirName": "Marvel Crew",
          "genre": "action",
          "year": "2019 July 2",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 1.56,
          "fid": 6
      },
      {
          "title": "Batman: The Dark knight",
          "dirName": "DC ",
          "genre": "action",
          "year": "2011 JULY 18",
          "a1Name": null,
          "a2Name": null,
          "a3Name": null,
          "rate": 0.544,
          "fid": 9
      }
  ];
  }

  loginUserReq(u:loginUser): Observable<msgRes> {
      let headers = new HttpHeaders();
      headers.set("access-control-allow-origin","*");
      let header = new HttpHeaders().set("access-control-allow-origin","*");
      
    
    return this.http.post <msgRes> (this._url_loginUser ,u);

}



}
