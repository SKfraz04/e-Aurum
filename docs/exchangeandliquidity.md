---
id: exchangeandliquidity
title: Exchange & Liquidity
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Centralized Liquidity Pool

At launch, the eAU token will be exclusively tradable within the e-Aurum platform. This design ensures:

- **Full control over token circulation**
- **Protection from external market volatility**
- **Guaranteed price stability aligned with real-time gold rates**

A centralized liquidity pool, managed directly by e-Aurum, handles all buy and sell orders. This pool is dynamically adjusted based on live gold pricing sourced from trusted APIs. By centralizing liquidity, e-Aurum ensures that all transactions occur at a fair market rate, free from the slippage and volatility seen in Automated Market Maker (AMM)-based decentralized exchanges.

## Minting & Burning

<Tabs>
  <TabItem value="minting" label="Minting">
    <h3>Asset-Backed Minting</h3>
    <ul>
      <li>eAU tokens are minted only after a verified deposit of physical gold with Brinks, a globally recognized vaulting partner.</li>
      <li>Each token represents exactly <strong>1 gram of physical gold</strong>, ensuring a strict 1:1 issuance ratio.<strong></strong></li>
      <li>Tokens are non-reissuable without matching reserves, preserving complete asset integrity.</li>
    </ul>
  </TabItem>

  <TabItem value="burning" label="Burning">
    <h3>Token Burn Mechanism</h3>
    <p>Tokens are <strong>permanently burned</strong> when:</p>
    <ul>
      <li>Users redeem them for physical gold.</li>
      <li>Users sell them back to the platform for USDT or fiat currency.</li>
      <li>This guarantees the circulating supply <strong>never exceeds actual gold reserves</strong>, maintaining perfect parity.</li>
    </ul>
  </TabItem>
</Tabs>

:::info AMM Liquidity Pool

- e‑Aurum operates a private **Automated Market Maker (AMM)** liquidity pool.
- This pool is maintained **internally by the platform**, not deployed on a public DEX.
- The AMM allows users to sell **eAU tokens and instantly receive USDT**, with pricing matched to live gold rates.

**Benefits:**
- No reliance on external liquidity providers.
- No slippage or arbitrage risk from third-party exchanges.
- Real-time price adjustments using oracle-fed gold pricing data.

**Price Integrity Guarantee**
- e‑Aurum uses real-time gold pricing feeds via Chainlink and secondary oracles.
- The AMM pricing curve ensures that users always buy or sell eAU at the current market price of gold per gram, eliminating volatility and off-peg risk.
:::

## Centralized AMM Infrastructure

- e‑Aurum does not rely on external Automated Market Makers like those used in public DEXs (e.g., Uniswap or PancakeSwap).
- Instead, it manages its own internal liquidity pool, optimized for price accuracy and low spread.

**This pool supports seamless buy/sell operations:**

- **Buyers**: deposit USDT or fiat to receive newly minted eAU.
- **Sellers**: send back eAU tokens, which are burned, and receive USDT from the pool.

**Transaction Workflow:**

1. User selects to sell eAU.
2. Platform calculates USDT equivalent using real-time gold pricing.
3. User sends eAU to platform wallet.
4. eAU tokens are burned.
5. USDT is instantly transferred to the user's wallet from the liquidity pool.

**Advantages of the Internal AMM Pool:**

- Price is **always aligned with global gold market rates**.
- Transactions are fast and fully transparent, recorded on-chain.
- No DEX-related issues like:
  - Off-peg arbitrage
  - Impermanent loss
  - Frontrunning

## Avoiding DEX Volatility

eAU will not be listed on decentralized exchanges (DEXs) during its initial launch phase. This strategy avoids issues such as:

- **Off-peg trading due to AMM mechanics**
- **Price manipulation by bots or whales**
- **Impermanent loss for liquidity providers**

Instead, the eAU token price is solely governed by the live gold price, offering users a transparent, predictable, and stable digital gold experience.

<details>
  <summary>Future Exchange Listings</summary>
  
  In subsequent phases, eAU may be listed on select centralized exchanges (CEXs) to allow broader liquidity, deeper markets, and global accessibility. The transition to open-market trading will be implemented carefully to maintain peg integrity and security.
</details>