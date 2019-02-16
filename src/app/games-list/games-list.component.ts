import { Component, OnInit } from '@angular/core';

import { Game } from "../game";
import { GameService } from "../game.service";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  public games: Game[];

  gameInfo;

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getAllGames().subscribe(response => this.games = response);
  }

}
