import { atomWithStorage } from "jotai/utils";

export const isConnectedAtom = atomWithStorage("wallet_connected", false);

export const accountAtom = atomWithStorage("web3_account", null);
