import { Location } from "../location/Location";

export type Floor = {
  createdAt: Date;
  id: string;
  locations?: Array<Location>;
  updatedAt: Date;
};
