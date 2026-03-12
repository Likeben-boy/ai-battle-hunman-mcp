export type PlayerState = {
    address: string;
    name: string;
    humanityScore: number;
    isAlive: boolean;
    isAI: boolean;
    actionCount: number;
    successfulVotes: number;
};
export type RoomState = {
    id: string;
    phase: number;
    phaseName: string;
    entryFee: bigint;
    prizePool: bigint;
    maxPlayers: number;
    playerCount: number;
    aliveCount: number;
    isActive: boolean;
    isEnded: boolean;
    currentInterval: number;
    lastSettleBlock: number;
    startBlock: number;
};
export declare const PHASE_NAMES: readonly ["Waiting", "Active", "Ended"];
