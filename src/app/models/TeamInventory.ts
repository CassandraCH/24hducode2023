import {Vehicle} from "./Vehicle";
import {Items} from "./Items";

export interface TeamInventory{
  item : Items[];
  isEquipped : boolean;
}
