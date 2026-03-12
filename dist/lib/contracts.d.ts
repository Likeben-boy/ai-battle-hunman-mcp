import { ethers } from "ethers";
export declare const ARENA_ABI: string[];
export declare function getArenaContract(addressOrProvider: string, signerOrProvider: ethers.Signer | ethers.Provider): ethers.Contract;
