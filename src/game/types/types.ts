import { Action } from "../actions/action"
import { Animal } from "../world-objects/animals/animal"
import { Person } from "../world-objects/people/person"
import { WorldObject } from "../world-objects/world-object"
import { Position } from "./helper-types"


export type CanDecideAction = {
  currentAction: Action | undefined
  decideWhatActionToTake()
}



export type RidesAHorse = {
  horse?: Horse
  ride()
}

export type HasAName = {
  name
}



export type Skills = {
  sword: number
  bow: number
}

export type CanAttack = {
  weapon: Weapon | null
}
export type HasSkills = {
  skills: Skills
}

export type CanBeAttacked = {
  hitPoints: number
  isDead: boolean
  getAttacked(damage: number)
}

export type Angle = {
  direction: 'up'|'down'|'left'|'right'
}

export type CanMove = {
  position: Position
  move(newPosition: Position): void
}

enum Rating {
  'None' = 0,
  'Low',
  'Average',
  'High',
  'Highest'
}
  

export type Weapon = WorldObject & {
  type: 'Sword' | 'Bow'
  quality: Rating
  skillRequirement: Rating
}


export type Sword = Weapon & {

}
export type Bow = Weapon & {
  quality
  skillRequirement
}

export type Arrow = {
  missileDamage: number
}

export type HasAWeapon = {
  weapon
  attack(target: CanBeAttacked)
}

export type HasASword = HasAWeapon &{
  sword
}

export type HasABow = HasAWeapon &{
  bow: Bow
}


export type Soldier = 
  Person &
  HasASword & 
  {
    skills: {
      sword: 1
    }
  } 

export type Archer = Person & HasABow & {
  arrows: number
  skills: {
    bow: 1
  }
  fire(target: CanBeAttacked, arrow: Arrow)
}

export type Knight = Soldier & RidesAHorse & {

}

export type HorseArcher = RidesAHorse & Archer & {

}

export type Horse = Animal & {

}

export type Tree = WorldObject & CanBeAttacked & {

}