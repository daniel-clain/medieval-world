import { observable, runInAction } from "mobx";
import { gameConfig } from "./config/game-config";
import { twoDec } from "../general-helper-functions";
import { createWorld, World } from "./world";

const {timeIncrementInterval, timeIncrementAmount} = gameConfig

export type Game = {
  paused?: boolean
  time: number
  world: World
}


export function createGame(){
  
  let worldTimer
  let paused: boolean

  const game: Game = {
    time: 0,
    world: createWorld(),
    set paused(val){
      paused = val
      if(paused){
        console.log('set pause');
        clearTimeout(worldTimer)
      } else {
        worldTimer = setInterval(() =>
          runInAction(() => 
            this.time = twoDec(this.time + timeIncrementAmount)
          ), 
          timeIncrementInterval
        )
      }
    },
    get paused(){
      return paused
    }
  }
  return observable(game)

}