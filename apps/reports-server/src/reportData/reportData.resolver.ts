import * as graphql from "@nestjs/graphql";
import { ReportDataResolverBase } from "./base/reportData.resolver.base";
import { ReportData } from "./base/ReportData";
import { ReportDataService } from "./reportData.service";

@graphql.Resolver(() => ReportData)
export class ReportDataResolver extends ReportDataResolverBase {
  constructor(protected readonly service: ReportDataService) {
    super(service);
  }
}
