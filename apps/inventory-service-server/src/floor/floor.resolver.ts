import * as graphql from "@nestjs/graphql";
import { FloorResolverBase } from "./base/floor.resolver.base";
import { Floor } from "./base/Floor";
import { FloorService } from "./floor.service";

@graphql.Resolver(() => Floor)
export class FloorResolver extends FloorResolverBase {
  constructor(protected readonly service: FloorService) {
    super(service);
  }
}
