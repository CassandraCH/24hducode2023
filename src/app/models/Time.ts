import { Teams } from "./Teams";
import { Races } from "./Races";
import { Vehicle } from "./Vehicle";

export interface Time{
  time : number;
  timeCalculated : number;
  date : string;
  medal : string;
  team : Teams;
  race : Races;
  rank : string;
  wearByLaps: number;
  stats : Vehicle;
  consumptionByLaps: number;
}