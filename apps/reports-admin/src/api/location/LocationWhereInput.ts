import { FloorWhereUniqueInput } from "../floor/FloorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LocationWhereInput = {
  floor?: FloorWhereUniqueInput;
  id?: StringFilter;
  roomNumber?: StringNullableFilter;
};
