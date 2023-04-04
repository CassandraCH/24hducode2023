import {Medals} from "./Medals";
import {Sections} from "./Sections";

export interface Races{
  id : number;
  dateAvailability : string;
  name : string;
  laps : number;
  difficulty : number;
  image : string;
  optional : boolean;
  nextRace : number;
  previousRace : number;
  sections : Sections[];
  straight:number;
  turn:number;
  sharpturn:number;
  medals : Medals;
}
