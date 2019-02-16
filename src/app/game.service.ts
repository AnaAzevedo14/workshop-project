import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Game } from './game';

@Injectable()
export class GameService {

  private _gameUrl: string = "../assets/game.json"

  private _allGamesUrl: string = "../assets/AllGames.json"

  constructor(private _http: Http) { }

  public getGame(id: number) {
    return this._http.get(this._gameUrl).pipe(map(res => res.json()));
  }

  public getAllGames(): Observable<Game[]> {
    return this._http.get(this._allGamesUrl).pipe(map(res => res.json()));
  }
}
