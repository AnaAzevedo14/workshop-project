import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameDescriptionComponent } from './game-description/game-description.component';
import { GameService } from "./game.service";
import { GamesListComponent } from './games-list/games-list.component';

  const appRoutes: Routes = [
    {path: 'games', component: GamesListComponent},
    {path: 'game/:id', component: GamePageComponent},
    {path: '', redirectTo: 'games', pathMatch: 'full'}
    
  ];

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    GameDescriptionComponent,
    GamesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
