import {type} from "os";

export enum paths {
  login = Object,
  registration = Object,
  404 = Object,
  500 = Object
}

export type Locations = keyof typeof paths;