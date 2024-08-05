import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type InventoryUpdateInput = {
  item?: ItemWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  quantity?: number | null;
};
