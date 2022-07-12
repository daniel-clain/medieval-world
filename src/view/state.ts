
import { observable } from "mobx";

export type MainState = {
  world: World
  testMode: boolean
}

export const state: MainState = observable({testMode: true, world: {}})