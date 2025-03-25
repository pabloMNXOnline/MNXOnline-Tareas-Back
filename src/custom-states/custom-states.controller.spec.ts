import { Test, TestingModule } from '@nestjs/testing';
import { CustomStatesController } from './custom-states.controller';
import { CustomStatesService } from './custom-states.service';

describe('CustomStatesController', () => {
  let controller: CustomStatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomStatesController],
      providers: [CustomStatesService],
    }).compile();

    controller = module.get<CustomStatesController>(CustomStatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
