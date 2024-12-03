import { Test, TestingModule } from '@nestjs/testing';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';

describe('ProducerController', () => {
  let producerController: ProducerController;
  let producerService: ProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerController],
      providers: [
        {
          provide: ProducerService,
          useValue: {
            getProducerList: jest.fn(),
            createProducer: jest.fn(),
          },
        },
      ],
    }).compile();

    producerController = module.get<ProducerController>(ProducerController);
    producerService = module.get<ProducerService>(ProducerService);
  });

  it('should return a list of Producer data', async () => {
    const result = {
      data: [],
      total: 0,
      currentPage: 1,
      totalPages: 1,
    };

    jest.spyOn(producerService, 'getProducerList').mockResolvedValue(result);

    const response = await producerController.getProducerList(1, 10);

    expect(response).toEqual(result);
    expect(producerService.getProducerList).toHaveBeenCalledWith(1, 10);
  });

  it('should create a new producer', async () => {
    const createProducerDto = {
      name: 'João da Silva',
      document: '30481871000135',
      address: 'Rua das Palmeiras, 123',
      phone: '+5511987654321',
      UF: 'SP',
      city: 'Arujá',
      number: 12,
      neighborhood: 'Centro',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = {
      id: 13,
      ...createProducerDto,
    };

    jest.spyOn(producerService, 'createProducer').mockResolvedValue(result);

    const response = await producerController.createProducer(createProducerDto);

    expect(response).toEqual(result);
    expect(producerService.createProducer).toHaveBeenCalledWith(
      createProducerDto,
    );
  });
});
