/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LocationService } from "../location.service";
import { LocationCreateInput } from "./LocationCreateInput";
import { Location } from "./Location";
import { LocationFindManyArgs } from "./LocationFindManyArgs";
import { LocationWhereUniqueInput } from "./LocationWhereUniqueInput";
import { LocationUpdateInput } from "./LocationUpdateInput";
import { InventoryFindManyArgs } from "../../inventory/base/InventoryFindManyArgs";
import { Inventory } from "../../inventory/base/Inventory";
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";

export class LocationControllerBase {
  constructor(protected readonly service: LocationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Location })
  async createLocation(
    @common.Body() data: LocationCreateInput
  ): Promise<Location> {
    return await this.service.createLocation({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Location] })
  @ApiNestedQuery(LocationFindManyArgs)
  async locations(@common.Req() request: Request): Promise<Location[]> {
    const args = plainToClass(LocationFindManyArgs, request.query);
    return this.service.locations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async location(
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Location | null> {
    const result = await this.service.location({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLocation(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() data: LocationUpdateInput
  ): Promise<Location | null> {
    try {
      return await this.service.updateLocation({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLocation(
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Location | null> {
    try {
      return await this.service.deleteLocation({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/inventories")
  @ApiNestedQuery(InventoryFindManyArgs)
  async findInventories(
    @common.Req() request: Request,
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Inventory[]> {
    const query = plainToClass(InventoryFindManyArgs, request.query);
    const results = await this.service.findInventories(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        item: {
          select: {
            id: true,
          },
        },

        location: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/inventories")
  async connectInventories(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        connect: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventories")
  async updateInventories(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        set: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventories")
  async disconnectInventories(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        disconnect: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
