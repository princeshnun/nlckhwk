import { FloorWhereUniqueInput } from "../floor/FloorWhereUniqueInput";

export type LocationUpdateInput = {
  floor?: FloorWhereUniqueInput | null;
  roomNumber?: string | null;
};
