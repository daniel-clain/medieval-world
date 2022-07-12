
import { observer } from 'mobx-react';
import * as React from 'react';
import {useEffect} from 'react';
import { state } from '../state';


export const World_V = observer(() => {
  const {world} = state
  const {} = world



  return <>
    <game-view>
      <Person_C />


      <player-interface>
        <game-level>Level: {game.level}</game-level>


        <game-time>{game.time}</game-time>

        <pause-button onClick={() => game.togglePause()}>
          {game.paused ? 'Unpause' : 'Pause'}
        </pause-button>

      </player-interface>


      <existing-things>
        {person.knownThings.map(thing => 
          <thing-element key={thing.name}>
            {thing.name}
            {thing.actions?.map(a => a.name).toString()}
          </thing-element>
        )}
      </existing-things>

      <game-background>
        <img src={background} />
      </game-background>

    </game-view>
  </>
})