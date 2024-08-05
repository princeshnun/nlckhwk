import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FloorService } from "./floor.service";
import { FloorControllerBase } from "./base/floor.controller.base";

@swagger.ApiTags("floors")
@common.Controller("floors")
export class FloorController extends FloorControllerBase {
  constructor(protected readonly service: FloorService) {
    super(service);
  }
}
