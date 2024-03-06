import { Controller, Get, Param } from '@nestjs/common';

import { PromotionCheckerService } from './promotion-checker.service';

@Controller('/promotion-checker')
export class PromotionCheckerController {

  constructor(private promotionService: PromotionCheckerService) {}

  @Get('/check/:uid')
  checkCounts(@Param('uid') uid: string) {
    return this.promotionService.check(uid, true);
  }

  @Get('/peek/:uid')
  peekCounts(@Param('uid') uid: string) {
    return this.promotionService.check(uid, false);
  }
}
