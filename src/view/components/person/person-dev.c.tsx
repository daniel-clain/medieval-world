
import { observer } from 'mobx-react';
import * as React from 'react';
import { SpriteSheetInfo } from '../../animation/animation';

import './person.sass'

export const PersonDev_C = observer((
  {spriteInfo}: 
  {
    spriteInfo: SpriteSheetInfo
  }
) => {
  

  return <>
    <person-element
      style={{
        width: `${spriteInfo?.dimensions.width || 10}px`,
        height: `${spriteInfo?.dimensions.height || 10}px`,
        backgroundPosition: `
          ${spriteInfo?.position.left}px
          ${spriteInfo?.position.bottom}px
        `
      }}
    >
    </person-element>
  </>
})