import { ReportDataWhereInput } from "./ReportDataWhereInput";
import { ReportDataOrderByInput } from "./ReportDataOrderByInput";

export type ReportDataFindManyArgs = {
  where?: ReportDataWhereInput;
  orderBy?: Array<ReportDataOrderByInput>;
  skip?: number;
  take?: number;
};
