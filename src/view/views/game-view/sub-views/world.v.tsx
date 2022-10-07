
import * as React from 'react';
import { Person_C } from '../../../components/person.c';
import { state } from '../../../state/state';


export const World_V = () => {
  const {world} = state.game!

  return <world-view>
    {world.people.map(person =>
      <Person_C {...{person}}/>
    )}
  </world-view>
}