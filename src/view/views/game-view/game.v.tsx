
import { observer } from 'mobx-react';
import * as React from 'react';
import { state } from '../../state/state';
import { World_V } from './sub-views/world.v';


export const Game_V = observer(() => {
  const {game} = state



  return <game-view>
    <World_V/>
  </game-view>
})