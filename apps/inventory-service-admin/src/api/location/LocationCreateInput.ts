import { InventoryCreateNestedManyWithoutLocationsInput } from "./InventoryCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  inventories?: InventoryCreateNestedManyWithoutLocationsInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
