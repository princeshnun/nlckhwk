import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportTemplateServiceBase } from "./base/reportTemplate.service.base";

@Injectable()
export class ReportTemplateService extends ReportTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
