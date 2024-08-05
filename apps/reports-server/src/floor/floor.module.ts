import { Module } from "@nestjs/common";
import { FloorModuleBase } from "./base/floor.module.base";
import { FloorService } from "./floor.service";
import { FloorController } from "./floor.controller";
import { FloorResolver } from "./floor.resolver";

@Module({
  imports: [FloorModuleBase],
  controllers: [FloorController],
  providers: [FloorService, FloorResolver],
  exports: [FloorService],
})
export class FloorModule {}
