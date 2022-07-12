import { observer } from 'mobx-react';
import * as React from 'react';
import { state } from '../state';

export const Person_C = observer(() => {
  const {game} = state
  const {person} = game!
  const {name,money,boredom,feeling,hunger} = person
  return <>
    <person-element>
      <person-info>
        <span>{name}</span>
        <span>Money {money}</span>
        <span>Boredom {boredom}</span>
        <span>Feeling {feeling}</span>
        <span>Hunger {hunger}</span>
      </person-info>
    </person-element>
  </>
})