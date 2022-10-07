
import * as React from 'react';

import './style.sass'
import { World_V } from './world.v';

import { state } from '../state';
import { StrictMode } from 'front-end-base';
import {Comp, BaseComp} from 'front-end-base'



  const {world, testMode} = state
  
  Comp(
    <StrictMode>

      {world?
          <World_V /> 
        :
        <pre-game>

          <start-button onClick={test}>
            Start New Game
          </start-button>

        </pre-game>
      }
    </StrictMode>
  )


type Vagina = {
  queef()
}
let dick = {
}

;(dick as Vagina).queef()
