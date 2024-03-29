import { observable, reaction } from "mobx";
import { createId, randomNumber } from "../../../general-helper-functions";
import { createWorldObject, WorldObject } from "../world-object";
import { HasAName, CanBeAttacked, CanDecideAction, HasSkills, CanMove } from "../../types/types";
import { canAttack, canBeAttacked, canMove } from "../../playground/factory-functions";
import { canDecideAction } from "../../actions/can-decide-action";
import { wanderAround } from "../../actions/action";
import { state } from "../../../view/state/state";
import { Position } from "../../types/helper-types";


export type Person_D = 
  WorldObject &
  HasAName & 
  HasSkills & 
{}

export type Person = Person_D &
  CanBeAttacked & CanDecideAction & CanMove
{}

export function createPerson({name, position}: 
  {name: string, position?: Position}
) {
  const personState: Person_D = observable(
    Object.assign(
      {
        name,
        skills: {bow: 0, sword: 0},
      },
      createWorldObject(position)
    )
  )
  const person: Person = Object.assign(
    personState,
    canMove(personState.position),
    canBeAttacked(10),
    canAttack(2),
    canDecideAction(
      personState,
      [wanderAround]
    )
  )

  onTimePassed(() => {
    person.currentAction?.spendTimeOnAction()    
  })

  onTaskCompleted(() =>
    person.decideWhatActionToTake()
  )


  return person


  function onTimePassed(effect: () => void){
    reaction(
      () => state.game?.time,
      () => effect()
    )
  }
  

  function onTaskCompleted(effect){
    reaction(
      () => person.currentAction?.completed, 
      () => effect()
    )
  }
  
}