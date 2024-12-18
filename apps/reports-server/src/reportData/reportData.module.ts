import { Module } from "@nestjs/common";
import { ReportDataModuleBase } from "./base/reportData.module.base";
import { ReportDataService } from "./reportData.service";
import { ReportDataController } from "./reportData.controller";
import { ReportDataResolver } from "./reportData.resolver";

@Module({
  imports: [ReportDataModuleBase],
  controllers: [ReportDataController],
  providers: [ReportDataService, ReportDataResolver],
  exports: [ReportDataService],
})
export class ReportDataModule {}
