# Connect and send Algorand transactions in minutes. 

> Pipeline Express is an ultra-light version of Pipeline UI React Library. The library provides two button components with hard-coded onClick events to greatly simplify the process of retrieving a wallet address from MyAlgo connect, signing and sending transactions.

[![NPM](https://img.shields.io/npm/v/pipeline-express-react.svg)](https://www.npmjs.com/package/pipeline-express-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install Library and run example

```bash
npm install
npm run build
cd example
npm install
npm run start
```

## Usage
See included example.
### Changing the API
The library includes an api key and node address for testing purposes. It is highly recommended to change these before deploying to production. To change these values, navigate to /src/index.js where you will see the following code (currently on line 25):

```jsx
  const algodToken = { 'X-API-Key': 'dmONugeHOX2DC8nDb3v8m6Bo9cI3WHbW6Ntt4QCZ' };
  const algodServer = "https://mainnet-algorand.api.purestake.io/ps2";
  const algodPort = "";
```
After replacing, save the changes and re-run:
```bash
npm run build
```
## License

MIT © [headline-design](https://github.com/headline-design)
