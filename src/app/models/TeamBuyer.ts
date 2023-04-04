import {Vehicle} from "./Vehicle";

export interface TeamBuyer{
  id : number;
  name : string;
  image : string;
  score : number;
  coin : number;
  actualRace : number;
  Vehicle : Vehicle;
}
