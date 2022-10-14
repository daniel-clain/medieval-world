import { randomNumber, twoDec } from "../../general-helper-functions"
import { gameConfig } from "../config/game-config";
import { Angle, Position } from "../types/helper-types";
import { action, observable, runInAction } from "mobx";
import { state } from "../../view/state/state";
import { CanMove } from "../types/types";

const {timeIncrementAmount} = gameConfig

export type Action = {
  name: ActionName_L
  timeSpent: number
  duration: number
  direction: number
  completed: boolean
  spendTimeOnAction()
}



export const wanderAround = (actor: CanMove): Action => {

  let timeSpent = 0

  
  return observable({
    name: "Wander Around" as ActionName_L,
    completed: false,
    set timeSpent(val){
      timeSpent = val
      if(timeSpent >= this.duration){
        this.completed = true
      }
    },
    get timeSpent(){return timeSpent},
    duration: randomNumber({from: 2, to:4}),
    direction: randomNumber({from: 0, to: 359}) as Angle,
    spendTimeOnAction(){
      if(this.completed){
        return console.log('tried to spend time on completed action');
      }
      else{
        this.timeSpent = twoDec(
          this.timeSpent + timeIncrementAmount
        )
        

        const newMovePosition: Position = getNewPosition(this.direction, actor.position)
    
          
        runInAction(() => {
          if(isMoveOutsideOfBounds()){
            return this.completed = true
          } else {
            actor.move(newMovePosition)
          }
        })
        
        function isMoveOutsideOfBounds(): boolean{
          const {left, bottom} = newMovePosition
          const {columns, rows, tileSize} = state.game.world
          return  (
            left < 0 || bottom < 0
            ||
            left > columns * tileSize
            ||
            bottom > rows * tileSize
          )
        }
    
        function getNewPosition(
          direction: Angle, position: Position
        ): Position {
    
          if(isNaN(direction))
            debugger
      
          const moveAmount = 2
          let addXAmount
          let addYAmount
      
          if (direction >= 0 && direction < 90) {
            addXAmount = Math.sin(direction * Math.PI / 180) * moveAmount
            addYAmount = Math.cos(direction * Math.PI / 180) * moveAmount
          }
          else if (direction >= 90 && direction < 180) {
            addXAmount = Math.cos((direction - 90) * Math.PI / 180) * moveAmount
            addYAmount = Math.sin((direction - 90) * Math.PI / 180) * moveAmount
            addYAmount *= -1
          }
          else if (direction >= 180 && direction < 270) {
            addXAmount = Math.sin((direction - 180) * Math.PI / 180) * moveAmount
            addYAmount = Math.cos((direction - 180) * Math.PI / 180) * moveAmount
            addYAmount *= -1
            addXAmount *= -1
          }
          else if (direction >= 270 && direction < 360) {
            addXAmount = Math.cos((direction - 270) * Math.PI / 180) * moveAmount
            addYAmount = Math.sin((direction - 270) * Math.PI / 180) * moveAmount
            addXAmount *= -1
          }
      
          const left = Math.round((position.left + addXAmount) * 100) / 100
          const bottom = Math.round((position.bottom + addYAmount) * 100) / 100
      
          if(isNaN(left) || isNaN(bottom))
            debugger
      
      
          return {left, bottom}
        }
      }
    }
  })

}

export type ActionName_L = 'Wander Around'
