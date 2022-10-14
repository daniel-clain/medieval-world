import { gameConfig } from "./config/game-config";
import { Person } from "./world-objects/people/person";
import { observable } from "mobx";
import { Animal } from "./world-objects/animals/animal";

const {rows, columns, tileSize} = gameConfig
export type World = {
  people: Person[]
  animals: Animal[]
  items: any[]
  tileSize: number
  rows: number
  columns: number
  height: number
  width: number
}
export function createWorld(){
  const world: World = observable({
    people: [],
    animals: [],
    items: [],
    tileSize,
    rows,
    columns,
    get height(){
      return this.rows * this.tileSize
    },
    get width(){
      return this.columns * this.tileSize
    }
  })
  return world
}