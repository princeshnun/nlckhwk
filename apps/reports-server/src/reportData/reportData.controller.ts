import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportDataService } from "./reportData.service";
import { ReportDataControllerBase } from "./base/reportData.controller.base";

@swagger.ApiTags("reportData")
@common.Controller("reportData")
export class ReportDataController extends ReportDataControllerBase {
  constructor(protected readonly service: ReportDataService) {
    super(service);
  }
}
