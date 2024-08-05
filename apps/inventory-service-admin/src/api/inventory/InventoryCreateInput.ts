import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type InventoryCreateInput = {
  item?: ItemWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  quantity?: number | null;
};
