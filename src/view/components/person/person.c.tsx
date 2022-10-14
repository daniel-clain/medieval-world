
import { observer } from 'mobx-react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Person } from '../../../game/world-objects/people/person';
import { wait } from '../../../general-helper-functions';
import { SpriteSheetInfo, personWalking } from '../../animation/animation';

import './person.sass'

export const Person_C = observer(({person}: {person: Person}) => {

  const [spriteInfo, setSpriteInfo] = useState<SpriteSheetInfo>()
  useEffect(() => {

    let killAnimation = false

    if(person.currentAction?.name == 'Wander Around'){
      doAnimation()
    }

    function doAnimation(){
      nextFrame()
  
      async function nextFrame(frameIndex = 0){
        if(frameIndex == personWalking.frames.length){
          frameIndex = 0
        }
        const currentFrame = personWalking.frames[frameIndex]
        const {direction} = person.currentAction
        const info = currentFrame[
          direction >= 337.5 || direction < 22.5 ? 'n' :
          direction >= 22.5 && direction < 67.5 ? 'ne' :
          direction >= 67.5 && direction < 112.5 ? 'e' :
          direction >= 112.5 && direction < 157.5 ? 'se' :
          direction >= 157.5 && direction < 182.5 ? 's' :
          direction >= 182.5 && direction < 227.5 ? 'sw' :
          direction >= 227.5 && direction < 272.5 ? 'w' :
          direction >= 272.5 && direction < 337.5 ? 'nw' : 'x'
        ]  
        setSpriteInfo(info)
        await wait(currentFrame.duration)
        if(!killAnimation)
          nextFrame(frameIndex + 1)
      }
    }
    return () => {
      killAnimation = true
    }

  }, [person.currentAction])


 /*  useEffect(() => {
    console.log('use effect triggerd by action = wander');
  }, []) */



  return <>
    <person-element
      class={person.currentAction?.name.toLowerCase().replace(' ', '-')}
      style={{
        left: `${person.position.left}px`,
        bottom: `${person.position.bottom}px`,
        width: `${spriteInfo?.dimensions.width || 10}px`,
        height: `${spriteInfo?.dimensions.height || 10}px`,
        backgroundPosition: `
          ${spriteInfo?.position.left}px
          ${spriteInfo?.position.bottom}px
        `
      }}
    >
      <person-info>
        <span>{person.currentAction?.name}</span>
      </person-info>
    </person-element>
  </>
})