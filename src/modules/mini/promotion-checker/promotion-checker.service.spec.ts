import { Test, TestingModule } from '@nestjs/testing';
import { PromotionCheckerService } from './promotion-checker.service';

describe('PromotionCheckerService', () => {
  let service: PromotionCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromotionCheckerService],
    }).compile();

    service = module.get<PromotionCheckerService>(PromotionCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
