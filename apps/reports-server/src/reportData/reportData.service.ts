import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportDataServiceBase } from "./base/reportData.service.base";

@Injectable()
export class ReportDataService extends ReportDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
