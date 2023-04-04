import {Vehicle} from "./Vehicle";

export interface TeamSeller{
  id : number;
  name : string;
  image : string;
  score : number;
  coin : number;
  actualRace : number;
  Vehicle : Vehicle;
}
