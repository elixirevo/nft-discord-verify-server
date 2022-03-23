/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { VerifyService } from './verify.service';

@Controller('verify')
export class VerifyController {
  constructor(private verifyService: VerifyService) {
    // 
  }

  @Post()
  verifyNft(@Body() payload: any) {
    return this.verifyService.holderVerify(payload.userId, payload.sigMsg);
  }
}
