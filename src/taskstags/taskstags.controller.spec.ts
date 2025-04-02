import { Test, TestingModule } from '@nestjs/testing';
import { TaskstagsController } from './taskstags.controller';
import { TaskstagsService } from './taskstags.service';

describe('TaskstagsController', () => {
  let controller: TaskstagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskstagsController],
      providers: [TaskstagsService],
    }).compile();

    controller = module.get<TaskstagsController>(TaskstagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
