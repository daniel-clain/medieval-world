import { HasAName, CanDecideAction, CanBeAttacked, CanMove } from "../../types/types";
import { WorldObject } from "../world-object";

export type Animal_D = WorldObject

export type Animal = Animal_D &
  CanDecideAction & CanBeAttacked & CanMove