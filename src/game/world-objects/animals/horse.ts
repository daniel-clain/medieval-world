import { observable, reaction } from "mobx";
import { createWorldObject, WorldObject } from "../world-object";
import { CanBeAttacked, CanDecideAction, CanMove } from "../../types/types";
import { canAttack, canBeAttacked, canMove } from "../../playground/factory-functions";
import { canDecideAction } from "../../actions/can-decide-action";
import { wanderAround } from "../../actions/action";
import { state } from "../../../view/state/state";
import { Position } from "../../types/helper-types";


export type Horse_D = 
  WorldObject
{}

export type Horse = Horse_D &
  CanBeAttacked & CanDecideAction & CanMove
{}

export function createHorse({position}: 
  {name: string, position?: Position}
) {
  const horseState: Horse_D = observable(
    createWorldObject(position)
  )
  const horse: Horse = Object.assign(
    horseState,
    canMove(horseState.position),
    canBeAttacked(10),
    canDecideAction(
      horseState,
      [wanderAround]
    )
  )

  onTimePassed(() => {
    horse.currentAction?.spendTimeOnAction()    
  })

  onTaskCompleted(() =>
  horse.decideWhatActionToTake()
  )


  return horse


  function onTimePassed(effect: () => void){
    reaction(
      () => state.game?.time,
      () => effect()
    )
  }
  

  function onTaskCompleted(effect){
    reaction(
      () => horse.currentAction?.completed, 
      () => effect()
    )
  }
  
}