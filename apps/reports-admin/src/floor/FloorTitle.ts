import { Floor as TFloor } from "../api/floor/Floor";

export const FLOOR_TITLE_FIELD = "id";

export const FloorTitle = (record: TFloor): string => {
  return record.id?.toString() || String(record.id);
};
