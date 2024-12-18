/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FloorWhereUniqueInput } from "./FloorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FloorUpdateInput } from "./FloorUpdateInput";

@ArgsType()
class UpdateFloorArgs {
  @ApiProperty({
    required: true,
    type: () => FloorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FloorWhereUniqueInput)
  @Field(() => FloorWhereUniqueInput, { nullable: false })
  where!: FloorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FloorUpdateInput,
  })
  @ValidateNested()
  @Type(() => FloorUpdateInput)
  @Field(() => FloorUpdateInput, { nullable: false })
  data!: FloorUpdateInput;
}

export { UpdateFloorArgs as UpdateFloorArgs };
