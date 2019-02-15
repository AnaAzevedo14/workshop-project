import { Component, OnInit } from '@angular/core';
import { GameService } from "../game.service";

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.css']
})
export class GameDescriptionComponent implements OnInit {

  public gameInfo;

  public hidePrice: boolean = true;

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getGame(1).subscribe(response => this.gameInfo = response);
  }

}
