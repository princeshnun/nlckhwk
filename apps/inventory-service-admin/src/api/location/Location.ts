import { Inventory } from "../inventory/Inventory";

export type Location = {
  createdAt: Date;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
