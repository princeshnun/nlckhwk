import { FloorWhereUniqueInput } from "../floor/FloorWhereUniqueInput";

export type LocationCreateInput = {
  floor?: FloorWhereUniqueInput | null;
  roomNumber?: string | null;
};
