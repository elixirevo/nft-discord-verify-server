import { Injectable } from '@nestjs/common';
import { recover } from '../chain/index';
import { balanceOf } from '../contract/nft';
import { updateRole } from '../discord/index';

const signMessage = 'Holder Verify';

@Injectable()
export class VerifyService {
  async holderVerify(userId: string, signingMessage: string) {
    const address = recover(signMessage, signingMessage);
    const balance = await balanceOf(address);
    if (parseInt(`${balance}`) > 0) {
      await updateRole(userId);
      console.log(true);
      return { state: true };
    } else {
      console.log(false);
      return { state: false };
    }
  }
}
