import { ethers } from 'ethers';
import ERC721ABI from '../../abi/ERC721.json';
import { klaytnProvider } from '../chain/index';

const contractAddress = '0x19FEb74A239fC7D6583d8C434A388880747E8dff';

export async function balanceOf(address: string) {
  const nft = new ethers.Contract(contractAddress, ERC721ABI, klaytnProvider);
  const balance = await nft.balanceOf(address);
  return balance;
}
