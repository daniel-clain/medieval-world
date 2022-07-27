
import { render } from 'react-dom'
import * as React from 'react';
import { observer } from 'mobx-react';

import './style.sass'
import { World_V } from './views/world.v';

import { state } from './state';
import { initialSetup, startNewGame } from './actions.service';
import { StrictMode } from 'react';


initialSetup()

const Index = observer(() => {

  const {world, testMode} = state
  
  return <StrictMode>

    {world?
        <World_V /> 
      :
      <pre-game>

        <start-button onClick={startNewGame}>
          Start New Game
        </start-button>

      </pre-game>
    }
  </StrictMode>
})




render(<Index />, 
  document.body.appendChild(
    document.createElement('risk-management')
  )
)
