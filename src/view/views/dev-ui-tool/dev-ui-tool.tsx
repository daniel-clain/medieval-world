import { observer } from "mobx-react"
import * as React from 'react';
import { useEffect, useState } from "react";
import { Animation, Direction_L, personWalking, SpriteSheetInfo } from "../../animation/animation";
import './dev-ui-tool.sass'
import { PersonDev_C } from "../../components/person/person-dev.c";
import { Dimensions } from "../../../game/types/helper-types";


export const DevUITool = observer(() => {
  const [animations, setAnimations] = useState<Animation[]>([personWalking])
  const directions: Direction_L[] = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']
  const [open, setOpen] = useState(false)
  const [selectedAnimation, setSelectedAnimation] = useState<Animation>(animations[0])
  const [selectedFrameIndex, setSelectedFrameIndex] = useState<number>(0)
  const [selectedDirection, setSelectedDirection] = useState<Direction_L>(directions[0])
  const [spriteInfo, setSpriteInfo] = useState<SpriteSheetInfo>(selectedAnimation.frames[selectedFrameIndex][selectedDirection])

  useEffect(() => {
    setSpriteInfo(selectedAnimation.frames[selectedFrameIndex][selectedDirection])
  }, [
    selectedAnimation,
    selectedFrameIndex,
    selectedDirection
  ])

  function onSpriteDataChange(spriteInfo: SpriteSheetInfo){
    console.log('ding');
    const animation = selectedAnimation
    animation.frames[selectedFrameIndex][selectedDirection] = spriteInfo
    setAnimations(animations.map(a => a.name == animation.name ? animation : a))
    setSelectedAnimation(animation)
    setSpriteInfo(spriteInfo)
  }

  return (
    <dev-ui-tool 
      class={`
        t-container
        ${open ? 'is-open' : ''}
      `}>
      <dev-tool-tag onClick={() => setOpen(!open)}>
        Dev
      </dev-tool-tag>
      
      <t-row>
        <t-label>Animation</t-label>
        <select 
          value={selectedAnimation.name} 
          onChange={({target: {value}}) => setSelectedAnimation(animations.find(a => a.name == value))}
        >
          {animations.map(({name}) => 
            <option 
              key={name}
              value={name}
            >{name}</option>
          )}
        </select>

      </t-row>
      <t-row>
        <t-label>Frame</t-label>
        <select 
          value={selectedFrameIndex} 
          onChange={({target: {value}}) => setSelectedFrameIndex(Number(value))}
        >
          {selectedAnimation.frames.map((frame, index) => 
            <option 
              key={index}
              value={index}
            >{index}</option>
          )}
        </select>

      </t-row>
      <t-row>
        <t-label>Facing Direction</t-label>

        <select 
          value={selectedDirection} 
          onChange={({target: {value}}) => setSelectedDirection(value as Direction_L)}
        >
          {directions.map((direction) => 
            <option 
              key={direction}
              value={direction}
            >{direction}</option>
          )}
        </select>
      </t-row>

      <t-heading>Position</t-heading>
      <t-row>
        <t-label>Left</t-label>
        <t-data>
          <input
            type={'number'} 
            onChange={({target: {value}}) => 
              onSpriteDataChange({
                ...spriteInfo,
                position: {
                  ...spriteInfo.position,
                  left: Number(value)
                }
              })
            } 
            value={spriteInfo.position.left}
          />
        </t-data>
      </t-row>
      
      <t-row>
        <t-label>Bottom</t-label>
        <t-data>
          <input
            type={'number'} 
            onChange={({target: {value}}) => 
              onSpriteDataChange({
                ...spriteInfo,
                position: {
                  ...spriteInfo.position,
                  bottom: Number(value)
                }
              })
            } 
            value={spriteInfo.position.bottom}
          />
        </t-data>
      </t-row>
      

      <t-heading>Dimensions</t-heading>
      <t-row>
        <t-label>Width</t-label>
        <t-data>
          <input
            type={'number'} 
            onChange={({target: {value}}) => 
              onSpriteDataChange({
                ...spriteInfo,
                dimensions: {
                  ...spriteInfo.dimensions,
                  width: Number(value)
                }
              })
            } 
            value={spriteInfo.dimensions.width}
          />
        </t-data>
      </t-row>
      
      <t-row>
        <t-label>Height</t-label>
        <t-data>
          <input
            type={'number'} 
            onChange={({target: {value}}) => 
              onSpriteDataChange({
                ...spriteInfo,
                dimensions: {
                  ...spriteInfo.dimensions,
                  height: Number(value)
                }
              })
            } 
            value={spriteInfo.dimensions.height}
          />
        </t-data>
      </t-row>

      <PersonDev_C spriteInfo={spriteInfo} />
      <button onClick={() => 
        console.log(
          JSON.stringify(selectedAnimation)
        )
      }>
        Log out animation object
      </button>
    </dev-ui-tool>
  )
})