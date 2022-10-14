
import { observer } from 'mobx-react';
import * as React from 'react';
import { state } from '../../state/state';
import { World_V } from './sub-views/world.v';
import './game.sass'
import { DevUITool } from '../dev-ui-tool/dev-ui-tool';


export const Game_V = observer(() => {
  const {game} = state

  return <game-view>
    {game ? 
      <World_V/> : ''
    }

  </game-view>
})