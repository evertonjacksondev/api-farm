import { Test, TestingModule } from '@nestjs/testing';
import { FarmService } from './farm.service';
import { FarmController } from './farm.controller';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('FarmController', () => {
  let farmController: FarmController;
  let farmService: FarmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmController],
      providers: [
        {
          provide: FarmService,
          useValue: {
            getFarmsList: jest.fn(),
            createFarm: jest.fn().mockResolvedValue({
              address: 'Rua Exemplo, 123, Cidade, Estado',
              phone: '+55 11 98765-4321',
              farmName: 'Fazenda Solar',
              farmLocation: 'Zona Rural, Cidade, Estado',
              email: 'contaato@fazendaexemplo.com',
              totalArea: 500,
              arable: 500,
              producer: 48,
              UF: 'SP',
              city: 'Arujá',
              number: 12,
              neighborhood: 'Centro',
            }),
          },
        },
      ],
    }).compile();

    farmController = module.get<FarmController>(FarmController);
    farmService = module.get<FarmService>(FarmService);
  });
  it('should return a list of farm data', async () => {
    const result = {
      data: [],
      total: 0,
      currentPage: 1,
      totalPages: 1,
    };

    jest.spyOn(farmService, 'getFarmsList').mockResolvedValue(result);

    const response = await farmController.getFarmsList(1, 10);

    expect(response).toEqual(result);
    expect(farmService.getFarmsList).toHaveBeenCalledWith(1, 10);
    expect(farmService.getFarmsList).toHaveBeenCalledTimes(1);
  });

  it('should create a new farm', async () => {
    const createFarmDto = {
      address: 'Rua Exemplo, 123, Cidade, Estado',
      phone: '+55 11 98765-4321',
      farmName: 'Fazenda Solar',
      farmLocation: 'Zona Rural, Cidade, Estado',
      email: 'contaato@fazendaexemplo.com',
      totalArea: 500,
      arable: 500,
      producerId: 48,
      UF: 'SP',
      city: 'Arujá',
      number: 12,
      neighborhood: 'Centro',
    };

    const result = { ...createFarmDto };

    const response = await farmController.createFarm(createFarmDto);
    expect(response).toEqual(result);
    expect(farmService.createFarm).toHaveBeenCalledWith(createFarmDto);
    expect(farmService.createFarm).toHaveBeenCalledTimes(1);
  });

  it('should return error if Total Area < arable', async () => {
    const createFarmDto = {
      address: 'Rua Exemplo, 123, Cidade, Estado',
      phone: '+55 11 98765-4321',
      farmName: 'Fazenda Solar',
      farmLocation: 'Zona Rural, Cidade, Estado',
      email: 'contaato@fazendaexemplo.com',
      totalArea: 500,
      arable: 600,
      producerId: 48,
      UF: 'SP',
      city: 'Arujá',
      number: 12,
      neighborhood: 'Centro',
    };

    jest.spyOn(farmService, 'createFarm').mockRejectedValue(
      new HttpException(
        {
          statusCode: 404,
          message:
            'A área agrícola não pode ser maior que a área total da fazenda.',
          error: 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      ),
    );

    try {
      await farmController.createFarm(createFarmDto);
    } catch (error) {
      expect(error.response).toEqual({
        statusCode: 404,
        message:
          'A área agrícola não pode ser maior que a área total da fazenda.',
        error: 'Bad Request',
      });
    }
  });

  it('should return error if Producer is not found', async () => {
    const createFarmDto = {
      address: 'Rua Exemplo, 123, Cidade, Estado',
      phone: '+55 11 98765-4321',
      farmName: 'Fazenda Solar',
      farmLocation: 'Zona Rural, Cidade, Estado',
      email: 'contaato@fazendaexemplo.com',
      totalArea: 600,
      arable: 600,
      producerId: 1,
      UF: 'SP',
      city: 'Arujá',
      number: 12,
      neighborhood: 'Centro',
    };

    jest.spyOn(farmService, 'createFarm').mockRejectedValue(
      new HttpException(
        {
          statusCode: 404,
          message: 'Produtor não encontrado.',
          error: 'Not Found',
        },
        HttpStatus.BAD_REQUEST,
      ),
    );

    try {
      await farmController.createFarm(createFarmDto);
    } catch (error) {
      expect(error.response).toEqual({
        statusCode: 404,
        message: 'Produtor não encontrado.',
        error: 'Not Found',
      });
    }
  });
});
