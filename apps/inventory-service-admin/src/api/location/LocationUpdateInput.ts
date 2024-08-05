import { InventoryUpdateManyWithoutLocationsInput } from "./InventoryUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  inventories?: InventoryUpdateManyWithoutLocationsInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
