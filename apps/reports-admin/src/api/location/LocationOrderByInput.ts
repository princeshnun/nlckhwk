import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  createdAt?: SortOrder;
  floorId?: SortOrder;
  id?: SortOrder;
  roomNumber?: SortOrder;
  updatedAt?: SortOrder;
};
