import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
