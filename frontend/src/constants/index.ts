import tokens from "./tokens.json";
import tokenLogos from "./tokenLogos";

export const ROUTES = {
  ROOT: "/",
  FAUCET: "/faucet",
  DASHBOARD: "/dashboard",
  WALLET: "/wallet",
};

export const TOKENS_LIST: Array<IToken> = Object.values(tokens).map((t) => ({
  ...t,
  logo: tokenLogos[t.symbol],
}));
export const TOKENS_BY_SYMBOL: Record<string, IToken> = TOKENS_LIST.reduce(
  (acc, t) => ({ ...acc, [t.symbol]: t }),
  {}
);
export const TOKENS_BY_ASSET_ID: Record<string, IToken> = TOKENS_LIST.reduce(
  (acc, t) => ({ ...acc, [t.assetId]: t }),
  {}
);

export const NODE_URL = "https://beta-3.fuel.network/graphql";
export const EXPLORER_URL =
  "https://fuellabs.github.io/block-explorer-v2/beta-3";
export const FAUCET_URL = "https://faucet-beta-3.fuel.network";
export const SEED =
  "0x3c930502838f1da408d93665b78c4fc00b884c0128fff900d05b4def71a3da4335d029828ba0a62c26f3563bcd52b0deec84d1014373a1722610d411611c3771";
export const SEED_ADDRESS =
  "fuel1pln6n26y4e8lrgcaqctp8mddhvgzgt44pc9ychark93ks9mk7yxqr63nle";
export const CONTRACT_ADDRESSES: Record<string, IContractsConfig> = {
  "0.1": {
    priceOracle:
      "0x4bf2826201fb74fc479a6a785cb70f2ce8e45b67010acfd47906993d130a21ff",
    market:
      "0xe367deeb25692058b0ac88107a893fbf508c59ec9128de0c33c6fec74f6d149e",
  },
};

export interface IToken {
  logo: string;
  assetId: string;
  name: string;
  symbol: string;
  decimals: number;
}

export interface IContractsConfig {
  priceOracle: string;
  market: string;
}
