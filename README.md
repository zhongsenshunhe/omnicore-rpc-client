# omnicore-rpc-client

Rpc client for omnicore wallet

> Notice: this library only works when your babel is using `babel-plugin-transform-object-rest-spread`

## Usage

First install the lib with npm `npm i omnicore-rpc-client` or yarn `yarn add omnicore-rpc-client`

Then import the lib and create a RPC client

```javascript
import OmniRpcClient from 'omnicore-rpc-client/commonjs'
// const OmniRpcClient = require('omnicore-rpc-client/commonjs')


const Client = new OmniRpcClient({
  "host": "yourhost",
  "network": "testnet", // mainnet testnet regtest
  "port": "8332",
  "username": "yourRpcUsername",
  "password": "yourRpcPassword"
})
```
