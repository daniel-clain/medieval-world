import { createId, randomNumber } from "../../general-helper-functions"
import { state } from "../../view/state/state"
import { gameConfig } from "../config/game-config"
import { Position } from "../types/helper-types"

const {rows, columns, tileSize} = gameConfig

export type WorldObject = {
  id: number
  position: Position
}

export  function createWorldObject(position: Position){
  const width = rows * tileSize
  const height = columns * tileSize
  const worldObject: WorldObject = {
    id: createId(),
    position: position || {
      left: randomNumber({from: 0, to: width}), 
      bottom: randomNumber({from: 0, to: height}),
    },
  }
  return worldObject
}


