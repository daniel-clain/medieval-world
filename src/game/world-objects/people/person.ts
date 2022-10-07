import { reaction, when } from "mobx";
import { Action } from "../../actions/action";
import { Game } from "../../game";
import { CanAttack, CanBeAttacked, CanMove, Direction, HasAName, Skills, Weapon } from "../../types";
import { Position, WorldElement } from "../world-object.type";

abstract class PersonHelper implements WorldElement, HasAName, CanBeAttacked, CanMove, CanAttack{

  location = {x: 0, y: 0}
  actionInProgress: Action
  private thingsInLineOfSight: WorldElement[] = []
  constructor(public name: string, protected game: Game){}
  
  getAttacked(damage: number) {
    throw new Error("Method not implemented.");
  }
  move(direction: Direction): void {
    throw new Error("Method not implemented.");
  }
  weapon: Weapon | null;
  skills: Skills;
  attack(target: CanBeAttacked) {
    throw new Error("Method not implemented.");
  }
}

export class Person extends PersonHelper{
  constructor(name, game){
    super(name, game)
    reaction(
      () => !this.actionInProgress,
      this.decideWhatActionToTake
    )
    reaction(
      () => game.world.time, this.onTimePasses
    )
  }
  
  private onTimePasses(){
    console.log('person on time passes :>> ');
  }



  private decideWhatActionToTake(){
    console.log('person decide to take action :>> ');
  }

}

