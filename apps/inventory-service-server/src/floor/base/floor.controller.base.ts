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
import { FloorService } from "../floor.service";
import { FloorCreateInput } from "./FloorCreateInput";
import { Floor } from "./Floor";
import { FloorFindManyArgs } from "./FloorFindManyArgs";
import { FloorWhereUniqueInput } from "./FloorWhereUniqueInput";
import { FloorUpdateInput } from "./FloorUpdateInput";

export class FloorControllerBase {
  constructor(protected readonly service: FloorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Floor })
  async createFloor(@common.Body() data: FloorCreateInput): Promise<Floor> {
    return await this.service.createFloor({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        numberField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Floor] })
  @ApiNestedQuery(FloorFindManyArgs)
  async floors(@common.Req() request: Request): Promise<Floor[]> {
    const args = plainToClass(FloorFindManyArgs, request.query);
    return this.service.floors({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        numberField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Floor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async floor(
    @common.Param() params: FloorWhereUniqueInput
  ): Promise<Floor | null> {
    const result = await this.service.floor({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        numberField: true,
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
  @swagger.ApiOkResponse({ type: Floor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFloor(
    @common.Param() params: FloorWhereUniqueInput,
    @common.Body() data: FloorUpdateInput
  ): Promise<Floor | null> {
    try {
      return await this.service.updateFloor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          numberField: true,
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
  @swagger.ApiOkResponse({ type: Floor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFloor(
    @common.Param() params: FloorWhereUniqueInput
  ): Promise<Floor | null> {
    try {
      return await this.service.deleteFloor({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          numberField: true,
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
}
