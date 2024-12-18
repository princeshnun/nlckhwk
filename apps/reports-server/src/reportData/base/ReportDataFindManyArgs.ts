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
import { ReportDataWhereInput } from "./ReportDataWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReportDataOrderByInput } from "./ReportDataOrderByInput";

@ArgsType()
class ReportDataFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReportDataWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReportDataWhereInput, { nullable: true })
  @Type(() => ReportDataWhereInput)
  where?: ReportDataWhereInput;

  @ApiProperty({
    required: false,
    type: [ReportDataOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReportDataOrderByInput], { nullable: true })
  @Type(() => ReportDataOrderByInput)
  orderBy?: Array<ReportDataOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ReportDataFindManyArgs as ReportDataFindManyArgs };
