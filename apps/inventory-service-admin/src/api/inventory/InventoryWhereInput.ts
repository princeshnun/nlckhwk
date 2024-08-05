import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryWhereInput = {
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  location?: LocationWhereUniqueInput;
  quantity?: IntNullableFilter;
};
