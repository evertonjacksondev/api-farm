import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateFarmDto {
  @ApiProperty({
    description: 'ID do produtor associado à fazenda',
    example: 123,
  })
  @IsNumber()
  @IsNotEmpty()
  producerId: number;

  @ApiProperty({
    description: 'Endereço completo da fazenda',
    example: 'Rua das Palmeiras, 123',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Número de telefone para contato',
    example: '+55 (11) 98765-4321',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'E-mail de contato da fazenda',
    example: 'fazenda@email.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Nome da fazenda',
    example: 'Fazenda do Sol',
  })
  @IsString()
  @IsNotEmpty()
  farmName: string;

  @ApiProperty({
    description: 'Unidade Federativa (UF) onde a fazenda está localizada',
    example: 'SP',
  })
  @IsString()
  UF: string;

  @ApiProperty({
    description: 'Cidade onde a fazenda está localizada',
    example: 'São Paulo',
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    description: 'Número do endereço da fazenda',
    example: 456,
  })
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @ApiProperty({
    description: 'Bairro onde a fazenda está localizada',
    example: 'Centro',
  })
  @IsNotEmpty()
  @IsString()
  neighborhood: string;


  @ApiProperty({
    description: 'Área total da fazenda (em hectares)',
    example: 100,
  })
  @IsNumber()
  @IsNotEmpty()
  totalArea: number;

  @ApiProperty({
    description: 'Área agricultável da fazenda (em hectares)',
    example: 80,
  })
  @IsNumber()
  @IsNotEmpty()
  arable: number;
}
