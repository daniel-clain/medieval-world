import { World } from "./world";

export class Game{
  paused = false
  world: World
  constructor(){
    this.world = new World(this)
  } 
}