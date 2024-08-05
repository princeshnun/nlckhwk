import { FloorWhereInput } from "./FloorWhereInput";
import { FloorOrderByInput } from "./FloorOrderByInput";

export type FloorFindManyArgs = {
  where?: FloorWhereInput;
  orderBy?: Array<FloorOrderByInput>;
  skip?: number;
  take?: number;
};
