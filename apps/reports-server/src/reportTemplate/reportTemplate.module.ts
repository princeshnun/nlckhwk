import { Module } from "@nestjs/common";
import { ReportTemplateModuleBase } from "./base/reportTemplate.module.base";
import { ReportTemplateService } from "./reportTemplate.service";
import { ReportTemplateController } from "./reportTemplate.controller";
import { ReportTemplateResolver } from "./reportTemplate.resolver";

@Module({
  imports: [ReportTemplateModuleBase],
  controllers: [ReportTemplateController],
  providers: [ReportTemplateService, ReportTemplateResolver],
  exports: [ReportTemplateService],
})
export class ReportTemplateModule {}
