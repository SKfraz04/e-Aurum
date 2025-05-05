---
id: tokenomics
title: Tokenomics 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Token Overview

- e‑Aurum (eAU) is a BEP‑20 digital asset on Binance Smart Chain, designed to deliver the stability of physical gold in a fully programmable format. Each eAU token is precisely pegged to **1 gram of audited, allocated gold**, ensuring that token supply mirrors real‑world reserves at all times.
- By combining blockchain transparency with best‑in‑class security, e‑Aurum democratizes gold ownership and unlocks new financial utility for a traditionally illiquid asset.

:::note Key Feature
By combining blockchain transparency with best‑in‑class security, e‑Aurum democratizes gold ownership and unlocks new financial utility for a traditionally illiquid asset.
:::

## Token Specifications

:::info Technical Details
The following specifications define the core parameters of the eAU token:
:::

| **Attribute**        | **Details**                                        |
|----------------------|---------------------------------------------------|
| **Token Name**       | e‑Aurum                                           |
| **Symbol**           | eAU                                               |
| **Standard**         | BEP‑20 (Binance Smart Chain)                      |
| **Peg**              | 1 eAU = 1 gram of physical gold                   |
| **Decimals**         | 18                                                |
| **Contract Address** | TBD                                               |
| **Audit Frequency**  | Quarterly proof-of-reserve audits                 |

## Price Pegging & Valuation Mechanism 

:::tip Core Mechanism
The price pegging mechanism ensures that eAU tokens maintain a 1:1 ratio with physical gold through automated processes and reliable price feeds.
:::

- **Real-Time Price Feeds:** e‑Aurum integrates decentralized oracle networks (e.g., Chainlink) to source live spot prices for gold, updated every minute to ensure precise valuation. 

- **Automated Mint & Burn:** Smart contracts automatically mint new eAU tokens upon verified gold deposits and burn tokens when users redeem for physical gold, preserving a `1:1 peg`. 

- **Fallback Oracles:** Secondary price feeds provide redundancy, guaranteeing uninterrupted peg maintenance during primary feed outages. 

## Supply & Distribution Model 

<Tabs>
  <TabItem value="supply" label="Dynamic Supply">
     
    No fixed cap; token issuance is strictly 1:1 against grams of gold added to reserves.
    Tokens are only minted when physical gold is verified and allocated.
    
  </TabItem>

  <TabItem value="burn" label="Burn Mechanism">
     
    Redemption requests trigger instant token burns upon successful verification,
    ensuring circulating supply matches reserve holdings.
    
  </TabItem>

  <TabItem value="reserve" label="Reserve Management">
     
    Gold reserves are held in insured, audited vaults operated by trusted custodians.
    Quarterly proof-of-reserve reports are published on-chain for full transparency.
   
  </TabItem>
</Tabs>

## Utility & Use Cases 

- **Digital Gold Investment:** Acquire and trade gold without physical custody complexities. 

- **Collateral & DeFi Integration:** Use eAU as collateral in lending, borrowing, and yield-farming protocols. 

- **Treasury Asset:** Allocate eAU tokens as a stable store of value for corporate treasuries and institutional portfolios. 

- **Cross-Border Payments:** Facilitate low-cost, high-speed transfers denominated in a stable, globally recognized asset. 

- **Merchant Settlements:** Accept eAU tokens for goods and services as an inflation-resistant payment method. 

## Reward Pool & Incentives

- **Staking Rewards:** A dedicated pool representing 10% of net gold deposits is allocated to incentivize staking and liquidity provision. Rewards are calculated on a pro-rata basis and distributed monthly.

- **Liquidity Incentives:** Yield rewards for liquidity providers on decentralized exchanges, ensuring tight bid‑ask spreads and deep market liquidity.

## Burn & Redemption Mechanism 

- **Redemption Options:** Users may redeem eAU for physical gold via vault pickup or insured home delivery (subject to KYC and minimum redemption thresholds). 

- **Fees & Processing Times:** A standard redemption fee of 0.5% applies; processing times range from 1–5 business days depending on delivery method. 

- **On-Chain Transparency:** All redemption events, including token burns and gold allocations, are immutably recorded on the blockchain for auditability.


