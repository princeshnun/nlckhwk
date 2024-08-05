import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  locationId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
