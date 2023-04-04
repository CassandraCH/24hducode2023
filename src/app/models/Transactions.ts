import {Vehicle} from "./Vehicle";
import {TeamBuyer} from "./TeamBuyer";
import {TeamSeller} from "./TeamSeller";

export interface Transactions{
  price : number;
  status : string;
  creationDate : string;
  completionDate : string;
  openingDate : string;
  Item : number;
  TeamSeller: TeamSeller;
  TeamBuyer : TeamBuyer;
}
