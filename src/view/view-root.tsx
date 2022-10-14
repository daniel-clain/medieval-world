
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Game_V } from './views/game-view/game.v';
import './styles/style.sass'
import { DevUITool } from './views/dev-ui-tool/dev-ui-tool';

const reactContainerElement = document.createElement('react-container')
document.body.appendChild(reactContainerElement)
createRoot(reactContainerElement).render(
  <>
    <Game_V/>
    <DevUITool/>
  </>
)