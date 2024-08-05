import { ReportTemplate as TReportTemplate } from "../api/reportTemplate/ReportTemplate";

export const REPORTTEMPLATE_TITLE_FIELD = "id";

export const ReportTemplateTitle = (record: TReportTemplate): string => {
  return record.id?.toString() || String(record.id);
};
