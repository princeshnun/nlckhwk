import { Location as TLocation } from "../api/location/Location";

export const LOCATION_TITLE_FIELD = "roomNumber";

export const LocationTitle = (record: TLocation): string => {
  return record.roomNumber?.toString() || String(record.id);
};
