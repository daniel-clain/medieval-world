import { observable } from "mobx";
import { Horse, RidesAHorse, CanBeAttacked, Sword, Soldier, Bow, Archer, Knight, HorseArcher, Position, CanMove } from "../types/types";
import { WorldObject } from "../world-objects/world-object";


export const canMove = (position: Position): CanMove => {
  return {
    position,
    move(newPosition){
      this.position = newPosition
    }
  }
}



function ridesAHorse(horse: Horse): RidesAHorse{
  return {
    horse,
    ride(){
      this.horse && console.log(`${self.name} rides his horse ${this.horse.name}`);
    }
  }
}

export const canBeAttacked = (hitPoints: number): CanBeAttacked => {
  return observable({
    hitPoints,
    get isDead(){ return this.hitPoints <= 0},
    getAttacked(attackDamage: number){
      this.hitPoints -= attackDamage
    }
  })
}



export const canAttack = (attackDamage: number) => {

  return {
    attackDamage,
    attack: (target: CanBeAttacked) => {
      target.getAttacked(attackDamage)
      /* const {strength, weapon, skills} = attackerState
      let hitChance = 2
      let damage = 1 
      damage = damage * (
        weapon ?
          weapon.quality *
          weapon.skillRequirement *
          strength
        :
          strength

      )
      target.getAttacked(damage) */
    }
  }
}


const createHorse = (name): Horse => {
  return {
    name,
    ...canBeAttacked()
  }
}



const createSoldier = (person: Person, sword: Sword): Soldier => {
  return {
    sword,
    ...person,
    skills: {...person.skills, sword: 1}
  }
}

const createArcher = (person: Person, bow: Bow): Archer => {
  const archer: Archer = {
    bow,
    fire(){
      this.bow
    },
    arrows: 0,
    ...person,
    skills: {...person.skills, bow: 1},
  }
  return archer
}

const createKnight = (person: Person, sword, horse): Knight => {
  return {
    sword,
    ...person,
    skills: {...person.skills, sword: 1},
    ...ridesAHorse(horse)
  }
}

const createHorseArcher = (person: Person, bow: Bow, horse: Horse): HorseArcher => {
  return {
    arrows: 0,
    fire(target){
      target.getAttacked(this.bow.damage)
    },
    bow,
    ...person,
    skills: {...person.skills, bow: 1},
    ...ridesAHorse(horse)
  }
}


const createSword = (location: Position, quality = 1, skillRequirement = 0) => {
  const sword: Sword =  {
    type: 'Sword', 
    quality, 
    skillRequirement, 
    location
  }
  return sword
}


{  

  const createBow = (location: Position, quality = 1, skillRequirement = 1) => {
    const bow: Bow = { 
      type: 'Bow',
      quality,
      skillRequirement,
      location
    }

    return bow

    
    const isWithinRange = (target: WorldObject) => {}
  }
}