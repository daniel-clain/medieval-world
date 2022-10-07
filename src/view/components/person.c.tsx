
import * as React from 'react';
import { Person } from '../../game/world-objects/people/person';

export const Person_C = <T extends Person>({person}: {person: T}) => {
  return <>
    <person-element>
      <person-info>
        <span>{person.name}</span>
      </person-info>
    </person-element>
  </>
}