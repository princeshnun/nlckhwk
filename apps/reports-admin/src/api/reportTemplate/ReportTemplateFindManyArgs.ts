import { ReportTemplateWhereInput } from "./ReportTemplateWhereInput";
import { ReportTemplateOrderByInput } from "./ReportTemplateOrderByInput";

export type ReportTemplateFindManyArgs = {
  where?: ReportTemplateWhereInput;
  orderBy?: Array<ReportTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
