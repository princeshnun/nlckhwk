import { ReportData as TReportData } from "../api/reportData/ReportData";

export const REPORTDATA_TITLE_FIELD = "id";

export const ReportDataTitle = (record: TReportData): string => {
  return record.id?.toString() || String(record.id);
};
