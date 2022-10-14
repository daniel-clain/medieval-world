import { observable, reaction } from "mobx";
import { twoDec, randomNumber } from "../../general-helper-functions";
import { state } from "../../view/state/state";
import { gameConfig } from "../config/game-config";
import { CanDecideAction } from "../types/types";
import { Animal_D } from "../world-objects/animals/animal";
import { Person, Person_D } from "../world-objects/people/person";
import { ActionName_L, Action, wanderAround } from "./action";

const {timeIncrementAmount} = gameConfig

export function canDecideAction(actorState: Person_D | Animal_D, actions: ((...args) => Action)[]) {


  const canDecideAction: CanDecideAction = observable({
    currentAction: undefined,
    decideWhatActionToTake(){
      this.currentAction = getRandomAction(getActionProbabilities())
    },
    
  })
  
  return canDecideAction

  function getActionProbabilities():
    {action: (...args) => Action, probability: number}[]
  {
    return actions.map(action => ({
      action,
      probability: 1
    }))
  }

  function getRandomAction(
    actionProbabilities: {
      action: (...args) => Action, 
      probability: number
    }[]
  ): Action{
    const totalProbability = actionProbabilities.reduce(
      (totalProbability, {probability}) => 
        totalProbability + probability, 0
    )
    const randomProbability = randomNumber({
      from: 0, to: totalProbability
    })
    let probabilityCount = 0
    const randomAction = actionProbabilities.find(
      ({probability}) => {
        if(
          randomProbability >= probabilityCount &&
          randomProbability <= probabilityCount + probability
        ) return true
      }
    )?.action(actorState)

    return randomAction
  }

}