
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Game_V } from './views/game-view/game.v';

const reactContainerElement = document.createElement('react-container')
document.body.appendChild(reactContainerElement)
createRoot(reactContainerElement).render(<Game_V/>)