import { Floor as TFloor } from "../api/floor/Floor";

export const FLOOR_TITLE_FIELD = "name";

export const FloorTitle = (record: TFloor): string => {
  return record.name?.toString() || String(record.id);
};
