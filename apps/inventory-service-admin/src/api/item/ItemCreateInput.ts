import { InventoryCreateNestedManyWithoutItemsInput } from "./InventoryCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  description?: string | null;
  inventories?: InventoryCreateNestedManyWithoutItemsInput;
  name?: string | null;
};
