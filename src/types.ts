
export type World = {
  people: (Person | Knight | Soldier | Archer | HorseArcher)[]
  animals: (Horse)[]
  items: any[]
}

export type RidesAHorse = {
  horse?: Horse
  ride()
}

export type HasAName = {
  name
}



export type Position = {
  row: number, 
  column: number
}


export type Skills = {
  sword: number
  bow: number
}

export type CanAttack = {
  weapon: Weapon | null
  skills: Skills
  attack(target: CanBeAttacked)
}

export type CanBeAttacked = {
  getAttacked(damage: number)
}

export type Direction = {
  direction: 'up'|'down'|'left'|'right'
}

export type CanMove = {
  location: Position
  move(direction: Direction): void
}

enum Rating {
  'None' = 0,
  'Low',
  'Average',
  'High',
  'Highest'
}
  

export type Weapon = WorldElement & {
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


export type WorldElement = {
  location: Position
}


export type Person = WorldElement & HasAName & CanBeAttacked & CanMove & CanAttack & {
  strength: number
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

export type Animal = WorldElement & HasAName & CanMove & CanBeAttacked & {

}

export type Horse = Animal & {

}

export type Tree = WorldElement & CanBeAttacked & {

}