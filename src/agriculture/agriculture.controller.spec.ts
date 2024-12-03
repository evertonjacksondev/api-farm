import { Test, TestingModule } from '@nestjs/testing';
import { AgricultureController } from './agriculture.controller';
import { AgricultureService } from './agriculture.service';

describe('AgricultureController', () => {
  let agricultureController: AgricultureController;
  let agricultureService: AgricultureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgricultureController],
      providers: [
        {
          provide: AgricultureService,
          useValue: {
            getAgricultureList: jest.fn().mockResolvedValue({
              data: [],
              total: 0,
              currentPage: 1,
              totalPages: 1,
            }),
          },
        },
      ],
    }).compile();

    agricultureController = module.get<AgricultureController>(
      AgricultureController,
    );
    agricultureService = module.get<AgricultureService>(AgricultureService);
  });

  it('should return a list of agriculture data', async () => {
    const result = {
      data: [],
      total: 0,
      currentPage: 1,
      totalPages: 1,
    };

    jest
      .spyOn(agricultureService, 'getAgricultureList')
      .mockResolvedValue(result);

    const response = await agricultureController.getAgricultureList(1, 10);

    expect(response).toEqual(result);
    expect(agricultureService.getAgricultureList).toHaveBeenCalledWith(1, 10);
  });
});
