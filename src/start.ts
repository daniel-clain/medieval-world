import { runInAction } from "mobx";
import { createGame, Game } from "./game/game";
import { gameConfig } from "./game/config/game-config";
import { numberLoop } from "./general-helper-functions";
import { createPerson } from "./game/world-objects/people/person";
import { state } from "./view/state/state";
import { createHorse } from "./game/world-objects/animals/horse";


runInAction(() => {
  state.game = createGame()
})

runInAction(() => {
  state.game.world.people.push(
    ...numberLoop(
      6, 
      () => createPerson({
        name: gameConfig.listOfNames.pop()!
      })
    )
  )
  state.game.world.animals.push(
    ...numberLoop(
      2, 
      () => createHorse({
        name: gameConfig.listOfNames.pop()!
      })
    )
  )
  state.game.paused = false
})
console.log('start');
runInAction(() => {
  state.game.world.people.forEach(p => p.decideWhatActionToTake())
})
