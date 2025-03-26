import { Test, TestingModule } from '@nestjs/testing';
import { TaskstagsService } from './taskstags.service';

describe('TaskstagsService', () => {
  let service: TaskstagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskstagsService],
    }).compile();

    service = module.get<TaskstagsService>(TaskstagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
