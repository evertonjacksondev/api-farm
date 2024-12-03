import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAgricultureDto {
  @ApiProperty({
    description: 'Nome da cultura agrícola',
    example: 'Milho',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Área utilizada para a plantação (em hectares)',
    example: 50,
  })
  @IsNotEmpty()
  areaUsed: number;

  @ApiProperty({
    description: 'Data de plantio',
    example: '2023-10-15T00:00:00.000Z',
  })
  @ApiProperty({
    description: 'ID da fazenda relacionada',
    example: 123,
  })
  @IsNotEmpty()
  farmId: number;
}
