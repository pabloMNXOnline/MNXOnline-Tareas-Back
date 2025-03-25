import { Test, TestingModule } from '@nestjs/testing';
import { CustomStatesService } from './custom-states.service';

describe('CustomStatesService', () => {
  let service: CustomStatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomStatesService],
    }).compile();

    service = module.get<CustomStatesService>(CustomStatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
