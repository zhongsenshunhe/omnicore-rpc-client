# omnicore-rpc-client

Rpc client for omnicore wallet

## Usage

First install the lib with npm `npm i omnicore-rpc-client` or yarn `yarn add omnicore-rpc-client`

Then import the lib and create a RPC client

```javascript
const OmniRpcClient = require('omnicore-rpc-client')

const Client = new OmniRpcClient({
  "host": "yourhost",
  "network": "testnet", // mainnet testnet regtest
  "port": "8332",
  "username": "yourRpcUsername",
  "password": "yourRpcPassword"
})
```
