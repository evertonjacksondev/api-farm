import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProducerDto {
  @ApiProperty({
    description: 'Nome do produtor',
    example: 'João da Silva',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Documento de identificação do produtor (CPF ou CNPJ)',
    example: '123.456.789-00',
  })
  @IsNotEmpty()
  @IsString()
  document: string;

  @ApiProperty({
    description: 'Endereço do produtor',
    example: 'Rua das Palmeiras, 123',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    description: 'Unidade Federativa (UF) do produtor',
    example: 'SP',
  })
  @IsString()
  UF: string;

  @ApiProperty({
    description: 'Cidade onde o produtor está localizado',
    example: 'São Paulo',
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    description: 'Número do endereço do produtor',
    example: 456,
  })
  @IsNotEmpty()
  number: string;

  @ApiProperty({
    description: 'Bairro onde o produtor está localizado',
    example: 'Centro',
  })
  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @ApiProperty({
    description: 'Número de telefone do produtor',
    example: '+55 (11) 98765-4321',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;
}
