import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsDate } from 'class-validator';

export class UpdateAgricultureDto {
  @ApiProperty({
    description: 'Nome da cultura agrícola a ser atualizado',
    example: 'Soja',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Nova área utilizada para a plantação (em hectares)',
    example: 75,
  })
  @IsNotEmpty()
  @IsNumber()
  areaUsed: number;

  @ApiProperty({
    description: 'Nova data de plantio',
    example: '2023-11-01T00:00:00.000Z',
  })
  @ApiProperty({
    description: 'ID da fazenda relacionada à cultura',
    example: 456,
  })
  @IsNotEmpty()
  @IsNumber()
  farmId: number;
}
