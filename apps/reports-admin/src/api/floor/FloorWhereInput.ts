import { StringFilter } from "../../util/StringFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";

export type FloorWhereInput = {
  id?: StringFilter;
  locations?: LocationListRelationFilter;
};
