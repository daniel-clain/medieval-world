import { Action, ActionName_L } from "../../game/actions/action"
import { Position } from "../../game/types/helper-types"
import { wait } from "../../general-helper-functions"

export type Direction_L = 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'

export type SpriteSheetInfo = {
  position: Position
  dimensions: {
    width: number, height: number
  },
}

export type Frame = {
  duration: number
} & {
  [key in Direction_L]: SpriteSheetInfo
}

export type Animation = {
  name: ActionName_L
  frames: Frame[]
}


export function doAnimation(walkAround: Action, setSpriteInfo: (info: SpriteSheetInfo) => void){
      
  nextFrame()

  async function nextFrame(frameIndex = 0){
    if(frameIndex == personWalking.frames.length){
      frameIndex = 0
    }
    const currentFrame = personWalking.frames[frameIndex]
    const {direction} = walkAround
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
    nextFrame(frameIndex + 1)
  }
}
export const personWalking: Animation = {
  "name": "Wander Around",
  "frames": [
    {
      "n": {
        "position": {
          "left": 0,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": 0,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": 0,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": 0,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": 0,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": 0,
          "bottom": -276
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": 0,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": 0,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -60,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -60,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -60,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -60,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -60,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -60,
          "bottom": -276
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -60,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -60,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -120,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -120,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -120,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -120,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -120,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -120,
          "bottom": -278
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -120,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -120,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -180,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -180,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -180,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -180,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -180,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -180,
          "bottom": -279
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -180,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -180,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -240,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -240,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -240,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -240,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -240,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -240,
          "bottom": -279
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -240,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -240,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -300,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -300,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -300,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -300,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -300,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -300,
          "bottom": -278
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -300,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -300,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -360,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -360,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -360,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -360,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -360,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -360,
          "bottom": -277
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -360,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -360,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -420,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -420,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -420,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -420,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -420,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -420,
          "bottom": -277
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -420,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -420,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -480,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -480,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -480,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -480,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -480,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -480,
          "bottom": -276
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -480,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -480,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -540,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -540,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -540,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -540,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -540,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -540,
          "bottom": -275
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -540,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -540,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -600,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -600,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -600,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -600,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -600,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -600,
          "bottom": -276
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -600,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -600,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -660,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -660,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -660,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -660,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -660,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -660,
          "bottom": -277
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -660,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -660,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -720,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -720,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -720,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -720,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -720,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -720,
          "bottom": -277
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -720,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -720,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -780,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -780,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -780,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -780,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -780,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -780,
          "bottom": -276
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -780,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -780,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -840,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -840,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -840,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -840,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -840,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -840,
          "bottom": -274
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -840,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -840,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    },
    {
      "n": {
        "position": {
          "left": -900,
          "bottom": -6
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "ne": {
        "position": {
          "left": -900,
          "bottom": -61
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "e": {
        "position": {
          "left": -900,
          "bottom": -117
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "se": {
        "position": {
          "left": -900,
          "bottom": -170
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "s": {
        "position": {
          "left": -900,
          "bottom": -224
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "sw": {
        "position": {
          "left": -900,
          "bottom": -274
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "w": {
        "position": {
          "left": -900,
          "bottom": -333
        },
        "dimensions": {
          "width": 47,
          "height": 50
        }
      },
      "nw": {
        "position": {
          "left": -900,
          "bottom": -385
        },
        "dimensions": {
          "width": 47,
          "height": 55
        }
      },
      "duration": 100
    }
  ]
}

export const personWalkingBackup: Animation = {
  name: 'Wander Around',
  frames: [
    {
      n:{
        position:{left:0, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left:0, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left:0, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left:0, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left:0, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left:0, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left:0, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left:0, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -840, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -840, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -840, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -840, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -840, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -840, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -840, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -840, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -120, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -120, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -120, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -120, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -120, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -120, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -120, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -120, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -180, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -180, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -180, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -180, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -180, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -180, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -180, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -180, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -240, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -240, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -240, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -240, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -240, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -240, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -240, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -240, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -300, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -300, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -300, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -300, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -300, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -300, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -300, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -300, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -360, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -360, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -360, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -360, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -360, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -360, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -360, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -360, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -420, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -420, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -420, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -420, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -420, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -420, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -420, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -420, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -480, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -480, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -480, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -480, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -480, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -480, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -480, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -480, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -540, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -540, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -540, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -540, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -540, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -540, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -540, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -540, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -8400, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -8400, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -8400, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -8400, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -8400, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -8400, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -8400, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -8400, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -660, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -660, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -660, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -660, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -660, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -660, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -660, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -660, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -720, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -720, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -720, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -720, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -720, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -720, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -720, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -720, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -780, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -780, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -780, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -780, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -780, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -780, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -780, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -780, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -840, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -840, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -840, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -840, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -840, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -840, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -840, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -840, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    },
    {
      n:{
        position:{left: -900, bottom: -3},
        dimensions:{width: 47, height: 57}
      },
      ne:{
        position:{left: -900, bottom:-57},
        dimensions:{width: 47, height: 57}
      },
      e:{
        position:{left: -900, bottom:-114},
        dimensions:{width: 47, height: 57}
      },
      se:{
        position:{left: -900, bottom: -168},
        dimensions:{width: 47, height: 57}
      },
      s:{
        position:{left: -900, bottom:-220},
        dimensions:{width: 47, height: 57}
      },
      sw:{
        position:{left: -900, bottom:-273},
        dimensions:{width: 47, height: 57}
      },
      w:{
        position:{left: -900, bottom: -328},
        dimensions:{width: 47, height: 57}
      },
      nw:{
        position:{left: -900, bottom: -382},
        dimensions:{width: 47, height: 57}
      },
      duration: 100
    }
  ]
}