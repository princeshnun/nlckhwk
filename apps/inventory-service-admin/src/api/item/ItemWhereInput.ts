import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";

export type ItemWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
};
