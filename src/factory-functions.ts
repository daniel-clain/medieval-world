

const canMove = (location = {row:0, column: 0}): CanMove => {
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



/* 

a weakling noob with a shit sword should do 1dmg

*/


const canAttack = (attacker: Person) => {

  return {
    attack: (target: CanBeAttacked) => {
      const {strength, weapon, skills} = attacker
      let hitChance = 
      let damage = 1 
      damage = damage *=(
        weapon ?
          weapon.quality 
          weapon.skillRequirement 
          strength

      )
      target.getAttacked(attacker.weapon?.damage || 1)
    }
  }
}

const createPerson = (name: string): Person => {
  return {
    name,
    strength: 5,
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
    attack,
    ...person,
  }
}

const createArcher = (person: Person, bow: Bow): Archer => {
  const archer: Archer = {
    bow,
    skill: 0,
    fire(){
      this.bow
    },
    arrows: 0,
    ...person,
  }
}

const createKnight = (person: Person, sword, horse): Knight => {
  return {
    sword,
    ...person,
    ...canRideAHorse(horse)
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
    ...hasAHorse
  }
}


const createSword = (quality = 1, skillRequirement = 0, location: Location): Sword => {
  const sword =  {
    type: 'Sword', 
    quality, 
    skillRequirement, 
    location
  }
  return sword
}


{  

  const createBow = ({range}: Bow) => {
    const bow: Bow = { 
      quality
      skillRequirement
    }

    return bow

    
    const isWithinRange = (target: WorldElement) => {}
  }
}