import { SessionStorageModel } from './SessionStorageModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
  })

  export class SessionStorageService {

  sessionStorgaeModel:SessionStorageModel=new SessionStorageModel();
  constructor() { }

  public set(value:string){
  this.sessionStorgaeModel.username=value;
  }
  get():string{
  return this.sessionStorgaeModel.username
  }
  remove(key:string){
  this.sessionStorgaeModel.username="guest";
  }
  clear(){
  this.sessionStorgaeModel=new SessionStorageModel();
  }
  } 