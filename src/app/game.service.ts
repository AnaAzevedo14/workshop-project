import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable()
export class GameService {

  private _gameUrl: string = "../assets/game.json"

  constructor(private _http: Http) { }

  public getGame(id: number) {
    return this._http.get(this._gameUrl).pipe(map(res => res.json()));
  }
}
