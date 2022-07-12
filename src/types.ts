
type World = {
  people: (Person | Knight | Soldier | Archer | HorseArcher)[]
  animals: (Horse)[]
  items: any[]
}

type RidesAHorse = {
  horse?: Horse
  ride()
}

type HasAName = {
  name
}



type Position = {
  row: number, 
  column: number
}


type Skills = {
  sword: number
  bow: number
}

type CanAttack = {
  weapon: Weapon
  skills: Skills
  attack(target: CanBeAttacked)
}

type CanBeAttacked = {
  getAttacked(damage: number)
}

type Direction = {
  direction: 'up'|'down'|'left'|'right'
}

type CanMove = {
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
  

type Weapon = WorldElement & {
  type: 'Sword' | 'Bow'
  quality: Rating
  skillRequirement: Rating
}


type Sword = Weapon & {

}
type Bow = Weapon & {
  quality
  skillRequirement
}

type Arrow = {
  missileDamage: number
}

type HasAWeapon = {
  weapon
  attack(target: CanBeAttacked)
}

type HasASword = HasAWeapon &{
  sword
}

type HasABow = HasAWeapon &{
  bow: Bow
}


type WorldElement = {
  location: Position
}


type Person = WorldElement & HasAName & CanBeAttacked & CanMove & CanAttack & {
  strength: number
}

type Soldier = 
  Person &
  HasASword & {
    skill: number
}

type Archer = Person & HasABow & {
  arrows: number
  skill: number
  fire(target: CanBeAttacked, arrow: Arrow)
}

type Knight = Soldier & RidesAHorse & {

}

type HorseArcher = RidesAHorse & Archer & {

}

type Animal = WorldElement & HasAName & CanMove & CanBeAttacked & {

}

type Horse = Animal & {

}

type Tree = WorldElement & CanBeAttacked & {

}