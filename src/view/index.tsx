
import { render } from 'react-dom'
import * as React from 'react';
import { observer } from 'mobx-react';

import './style.sass'
import { Game_V } from './views/game.v';
import { Test_C } from '../testing/test.c';

import { state } from './state';
import { continueSavedGame, initialSetup, startNewGame } from './actions.service';
import { StrictMode } from 'react';


initialSetup()

const Index = observer(() => {

  const {game, savedGame, testMode} = state
  
  return <StrictMode>

    {game?
        <Game_V /> 
      :
      <pre-game>

        <start-button onClick={startNewGame}>
          Start New Game
        </start-button>
        
        {savedGame?
          <continue-button onClick={continueSavedGame}>
            Continue Existing Game
          </continue-button> : ''
        }
      </pre-game>
    }
    {testMode?
      <Test_C /> : ''
    }
  </StrictMode>
})




render(<Index />, 
  document.body.appendChild(
    document.createElement('risk-management')
  )
)
