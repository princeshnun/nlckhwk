import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FloorServiceBase } from "./base/floor.service.base";

@Injectable()
export class FloorService extends FloorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
