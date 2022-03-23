/* eslint-disable prettier/prettier */
import dotenv from 'dotenv';
import { ethers } from 'ethers';
import Caver from 'caver-js'
const caver = new Caver();
dotenv.config();

const klaytnRPC = 'https://public-node-api.klaytnapi.com/v1/cypress';
const ethereumRPC = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';

export const klaytnProvider = new ethers.providers.JsonRpcProvider(klaytnRPC);
export const ethereumProvider = new ethers.providers.JsonRpcProvider(ethereumRPC);

// klaytn
export function recover(message: string, signature: string) {
  const address = caver.klay.accounts.recover(message, signature)
  return address
}

// ethereum
export function verifyMessage(message: string, signature: string) {
  const address = ethers.utils.verifyMessage(message, signature)
  return address
}