import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameDescriptionComponent } from './game-description/game-description.component';
import { GameService } from "./game.service";

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    GameDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
