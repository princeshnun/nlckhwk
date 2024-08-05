import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FloorWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  numberField?: IntNullableFilter;
};
