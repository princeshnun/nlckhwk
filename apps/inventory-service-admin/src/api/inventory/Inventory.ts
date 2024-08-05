import { Item } from "../item/Item";
import { Location } from "../location/Location";

export type Inventory = {
  createdAt: Date;
  id: string;
  item?: Item | null;
  location?: Location | null;
  quantity: number | null;
  updatedAt: Date;
};
