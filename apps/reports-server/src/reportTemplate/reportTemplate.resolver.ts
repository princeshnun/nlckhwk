import * as graphql from "@nestjs/graphql";
import { ReportTemplateResolverBase } from "./base/reportTemplate.resolver.base";
import { ReportTemplate } from "./base/ReportTemplate";
import { ReportTemplateService } from "./reportTemplate.service";

@graphql.Resolver(() => ReportTemplate)
export class ReportTemplateResolver extends ReportTemplateResolverBase {
  constructor(protected readonly service: ReportTemplateService) {
    super(service);
  }
}
