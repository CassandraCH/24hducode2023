import {Statistic} from "./Statistic";


export interface Items{
  id : number;
  name : string;
  type : string;
  sellingPrice : number;
  image : string;
  rarity : string;
  statistiques : Statistic[];
  statut?: string;
}
