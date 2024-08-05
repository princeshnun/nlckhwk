/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ReportTemplate as PrismaReportTemplate } from "@prisma/client";

export class ReportTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ReportTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.reportTemplate.count(args);
  }

  async reportTemplates(
    args: Prisma.ReportTemplateFindManyArgs
  ): Promise<PrismaReportTemplate[]> {
    return this.prisma.reportTemplate.findMany(args);
  }
  async reportTemplate(
    args: Prisma.ReportTemplateFindUniqueArgs
  ): Promise<PrismaReportTemplate | null> {
    return this.prisma.reportTemplate.findUnique(args);
  }
  async createReportTemplate(
    args: Prisma.ReportTemplateCreateArgs
  ): Promise<PrismaReportTemplate> {
    return this.prisma.reportTemplate.create(args);
  }
  async updateReportTemplate(
    args: Prisma.ReportTemplateUpdateArgs
  ): Promise<PrismaReportTemplate> {
    return this.prisma.reportTemplate.update(args);
  }
  async deleteReportTemplate(
    args: Prisma.ReportTemplateDeleteArgs
  ): Promise<PrismaReportTemplate> {
    return this.prisma.reportTemplate.delete(args);
  }
}