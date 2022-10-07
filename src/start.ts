import { runInAction } from "mobx";
import { createPerson } from "./game/factory-functions";
import { Game } from "./game/game";
import { gameConfig } from "./game/game-config";
import { numberLoop } from "./game/helper-functions";
import { Person } from "./game/world-objects/people/person";
import { state } from "./view/state/state";

const game = new Game()

game.world.people = numberLoop(10, 
  () => new Person(gameConfig.listOfNames.pop()!, game)
)

runInAction(() => {
  state.game = game
})
