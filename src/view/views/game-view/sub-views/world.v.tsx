
import { observer } from 'mobx-react';
import * as React from 'react';
import { Person_C } from '../../../components/person/person.c';
import { state } from '../../../state/state';

import './world.sass'


export const World_V = observer(() => {
  const {world} = state.game!
  const {rows, columns, tileSize} = world
  return <world-view
    style={{
      height: `${rows * tileSize}px`,
      width: `${columns * tileSize}px`
    }}
  >
    {world.people.map(person =>
      <Person_C key={person.id} person={person}/>
    )}
  </world-view>
})