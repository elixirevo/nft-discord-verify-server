import { Module } from '@nestjs/common';
import { VerifyModule } from './verify/verify.module';

@Module({
  imports: [VerifyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
