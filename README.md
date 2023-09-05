# Purpose of Soulbound
Octan Soulbound contracts are to allow users mint Soulbound Token (SBT), carrying their reputation scores provided by Octan Reputation Ranking System, then proving and building their trustworthiness in Web3 space. Visit Octan Reputation Ranking Scoring algorithm and framework here https://github.com/Octan-Labs/Reputation-scoring. Octan onchain data processing pipeline here https://github.com/Octan-Labs/pipeline.

# Octan SoulBound Contracts

The smart contract source code, written in Solidity, of the Octan 1ID Project has been verified by [Verichain](https://www.verichains.io/). You can access the verification report by following this [link](https://github.com/verichains/public-audit-reports/blob/main/Verichains%20Public%20Audit%20Report%20-%20Octan%20Soulbound%20Token%20-%20v1.1.pdf).  

Octan Soulbound contracts has been deployed on mainnets of:
- **BNB Chain**:
  - Management	0x70B88A6d3c2c5DdD0301e87EDd77099e69a1c77E  
  - Reputation	0xc7A344C69075cecBDB97FcA96AbD7f4e3977fa43  
  - Minter	0x4FB6aAaF1Dcfa7c3811b2747bFEe06296f4d4bFd  
- **opBNB**:
  - Management	0x3D0B6850B8C10174437cCD82A55786403f6875dc
  - Reputation	0x4dC69dD4601D37BF8141a563Dc26394a2A7A6810
  - Minter	0x11D0a90608Af97B95E0Ec58DCc3ffC1abB77E3C8
### Requirements

- Installations:
  - NodeJS: version 16.15.1 or above ([link](https://nodejs.org/en/))
  - yarn: version 1.22.17 or above ([link](https://www.npmjs.com/package/yarn))
- Install dependencies:
  ```bash
      yarn
  ```

### Configurations

- Create your environment file (`.env`) by following a sample (`env.example`)
    
**Note**: 
- You can remove unnecessary `RPC_PROVIDER` or `API_KEY`, but make sure update accordingly in the `hardhat.config.ts`

### Running Tests
- Run a command:
  ```bash
      yarn test
  ```

### Deployment

You can try to deploy these contracts on public networks. Example:

- Deploy on BNB Smart Chain Testnet:
```bash
  yarn bsc_test scripts/deployment.ts
```
