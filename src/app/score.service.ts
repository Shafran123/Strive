import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IScore } from './score';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private _url: string = "https://api.myjson.com/bins/162brb"


 // private _url : string = "https://api.myjson.com/bins/9kfxv"
  constructor(private http: HttpClient) { }


  getScore():Observable<IScore[]> {
    return this.http.get<IScore[]>(this._url);

  }

}
