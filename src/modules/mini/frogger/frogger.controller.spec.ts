import { Test, TestingModule } from '@nestjs/testing';
import { FroggerController } from './frogger.controller';

describe('FroggerController', () => {
  let controller: FroggerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FroggerController],
    }).compile();

    controller = module.get<FroggerController>(FroggerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
