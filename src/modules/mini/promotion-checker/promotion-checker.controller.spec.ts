import { Test, TestingModule } from '@nestjs/testing';
import { PromotionCheckerController } from './promotion-checker.controller';

describe('PromotionCheckerController', () => {
  let controller: PromotionCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromotionCheckerController],
    }).compile();

    controller = module.get<PromotionCheckerController>(PromotionCheckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
