import { Module } from '@nestjs/common';
import { VerifyService } from './verify.service';
import { VerifyController } from './verify.controller';

@Module({
  providers: [VerifyService],
  controllers: [VerifyController],
})
export class VerifyModule {}
