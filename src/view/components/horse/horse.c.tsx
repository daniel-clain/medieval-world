
import { observer } from 'mobx-react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Horse } from '../../../game/types/types';
import { wait } from '../../../general-helper-functions';
import { SpriteSheetInfo, personWalking } from '../../animation/animation';

import './horse.sass'

export const Horse_C = observer(({horse}: {horse: Horse}) => {

  const [spriteInfo, setSpriteInfo] = useState<SpriteSheetInfo>()
  useEffect(() => {

    let killAnimation = false

    if(horse.currentAction?.name == 'Wander Around'){
      doAnimation()
    }

    function doAnimation(){
      nextFrame()
  
      async function nextFrame(frameIndex = 0){
        if(frameIndex == personWalking.frames.length){
          frameIndex = 0
        }
        const currentFrame = personWalking.frames[frameIndex]
        const {direction} = horse.currentAction
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

  }, [horse.currentAction])


 /*  useEffect(() => {
    console.log('use effect triggerd by action = wander');
  }, []) */



  return <>
    <horse-element
      class={horse.currentAction?.name.toLowerCase().replace(' ', '-')}
      style={{
        left: `${horse.position.left}px`,
        bottom: `${horse.position.bottom}px`,
        width: `${spriteInfo?.dimensions.width || 10}px`,
        height: `${spriteInfo?.dimensions.height || 10}px`,
        backgroundPosition: `
          ${spriteInfo?.position.left}px
          ${spriteInfo?.position.bottom}px
        `
      }}
    >
      <horse-info>
        <span>{horse.currentAction?.name}</span>
      </horse-info>
    </horse-element>
  </>
})