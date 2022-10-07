import { observable } from "mobx";
import { Game } from "../../game/game";

export const state: {game?: Game} =  observable({})