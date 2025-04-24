---
id: apidoc
title: API & Developer Documentation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

e‑Aurum offers a robust and secure API suite to enable seamless integrations across wallets, exchanges, fintech platforms, and enterprise systems. This section outlines the available developer tools and documentation to support third-party integrations and platform extensions.

## API Endpoints for Wallets & Exchanges

<Tabs>
  <TabItem value="balance" label="Token Balance Endpoint">
    Retrieve the balance of EAU tokens held by a specific address.
  </TabItem>

  <TabItem value="history" label="Transaction History">
    Access on-chain transaction records for any wallet, including minting, burning, transfers, and redemptions.
  </TabItem>

  <TabItem value="price" label="Gold Price Feed">
    Real-time gold pricing feed to sync frontend pricing with backend smart contract execution.
  </TabItem>

  <TabItem value="logs" label="Token Minting & Burning Logs">
    Programmatic access to mint and burn events for validation and proof of reserve purposes.
  </TabItem>
</Tabs>

## SDKs for Integration 

- **JavaScript SDK:** 
 Simplified wrapper for interacting with the eAU smart contracts, wallet creation, and token management.

- **Python SDK (Planned):** 
 Enable backend developers to easily integrate token pricing and redemption workflows.

## Web3 & Smart Contract Interaction Guide 

:::info Integration Framework
e-Aurum's robust interaction framework ensures that developers can easily interface with the platform's smart contracts.
:::

- **Smart Contract Addresses and ABI Docs:** 
 Developers will have access to the official contract ABIs and deployment details.

- **Web3 Integration Templates:** 
 Sample code for Web3.js and Ethers.js to connect wallet interfaces and perform token operations.

- **Authentication & Permissions:** 
 API key support and role-based access control for enterprise integrations.

## Testing & Sandbox Environment 

<details>
  <summary>Testnet Access</summary>

  A complete testnet environment is available for developers to experiment with API calls and smart contract transactions.
</details>

<details>
  <summary>Sandbox Wallets</summary>

  Temporary test wallets are generated with mock balances to simulate purchases, redemptions, and transfers.
</details>

<details>
  <summary>Rate Limiting & Logging</summary>

  Usage limits and activity logs help maintain API performance and ensure secure, auditable integration.
</details>

:::warning Testing Environment
By providing a structured and developer-friendly API ecosystem, e‑Aurum supports fast integration for digital wallets, fintech applications, institutional trading platforms, and custodial services—strengthening the overall liquidity and utility of the EAU token.
:::