import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportTemplateService } from "./reportTemplate.service";
import { ReportTemplateControllerBase } from "./base/reportTemplate.controller.base";

@swagger.ApiTags("reportTemplates")
@common.Controller("reportTemplates")
export class ReportTemplateController extends ReportTemplateControllerBase {
  constructor(protected readonly service: ReportTemplateService) {
    super(service);
  }
}
