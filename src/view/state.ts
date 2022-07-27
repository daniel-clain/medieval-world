
import { observable } from "mobx";
import { World } from "../types";

export type MainState = {
  world: World | null
  testMode: boolean
}

export const state: MainState = observable({testMode: true, world: null})