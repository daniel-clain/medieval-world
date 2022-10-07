import { reaction } from "mobx";
import { Game } from "./game";
import { twoDec } from "./helper-functions";
import { Animal } from "./types";
import { Person } from "./world-objects/people/person";

export class World{
  private worldTimer
  time = 0
  people: Person[] = []
  animals: Animal[] = []
  items: any[] = []
  constructor(private game: Game){
    reaction(
      () => game.paused, this.onGamePauseToggle
    )
  }

  private onGamePauseToggle(){
    if(this.game.paused){
      clearTimeout(this.worldTimer)
    } else {
      this.worldTimer = setInterval(
        this.incrementTime, 100
      )
    }
  }

  private incrementTime(){
    this.time = twoDec(this.time + 0.1)
  }
}