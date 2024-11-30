import { IsInt, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @MaxLength(100)
    name:string;

    @IsInt()
    @Min(1)
    age:number;

    @IsOptional()
    @IsString()
    country?:string;
}
