import { createType } from "@polkadot/types";

const unsub = await api.query.timestamp.now((ts) => {
    console.log(ts);
});

const token = { "Token": "ETH" }
const res = await api.query.ormlTokens.accounts("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", token)
console.log("TOKENS", res)


const res = await api.query.tokens.balances("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", [0, 3])
console.log("TOKENS", res)