
import { CanMove, Horse, RidesAHorse, CanBeAttacked, Person, Sword, Soldier, Bow, Archer, Knight, HorseArcher} from "./types";
import { Position, WorldElement } from "./world-objects/world-object.type";


const canMove = (location = {x:0, y: 0}): CanMove => {
  return {
    location,
    move(direction){
      console.log(`direction is ${direction}`);
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
const canBeAttacked = (): CanBeAttacked => {
  return {
    getAttacked(){

    }

  }
}


const canAttack = (attacker: Person) => {

  return {
    attack: (target: CanBeAttacked) => {
      const {strength, weapon, skills} = attacker
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
      target.getAttacked(damage)
    }
  }
}

export function createPerson(name: string): Person{
  return {
    name,
    strength: 5,
    weapon: null,
    skills: {bow: 0, sword: 0},
    ...canAttack(this),
    ...canBeAttacked(),
    ...canMove()
  }
}

const createHorse = (name): Horse => {
  return {
    name,
    ...canBeAttacked(),
    ...canMove()
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

    
    const isWithinRange = (target: WorldElement) => {}
  }
}