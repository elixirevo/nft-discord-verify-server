import { ethers } from 'ethers';
import ERC721ABI from '../../abi/ERC721.json';
import { klaytnProvider } from '../chain/index';

const contractAddress = '';

export async function balanceOf(address: string) {
  const nft = new ethers.Contract(contractAddress, ERC721ABI, klaytnProvider);
  const balance = await nft.balanceOf(address);
  return balance;
}
