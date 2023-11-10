import { Module } from '@nestjs/common';
import { FileManagerService } from 'src/global-services/file-manager/file-manager.service';

import { PromotionCheckerController } from './promotion-checker/promotion-checker.controller';
import { PromotionCheckerService } from './promotion-checker/promotion-checker.service';

@Module({
  controllers: [PromotionCheckerController],
  providers: [PromotionCheckerService, FileManagerService],
  exports: [FileManagerService]
})
export class MiniModule {}
