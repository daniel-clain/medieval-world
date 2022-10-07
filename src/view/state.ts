
import { observable } from "front-end-base";
import { World } from "../types";

export type MainState = {
  world: World | null
  testMode: boolean
}

export const state: MainState = observable({testMode: true, world: null})