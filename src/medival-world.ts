






export function makeBarryBecomeASoldier() {
  const barry = world.people.find(p => p.name == 'Barry')
  const sword = world.items.find(i => i.type == 'Sword')
  if(!barry) return
  world.barry = 
  world.people.map(p => {
    p.name == barry.name ?
      createSoldier(barry, sword) : p
  })
  console.log(barry);

  world.barry.attack
}

