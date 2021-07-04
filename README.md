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
### Try it in CodeSandbox (or your IDE of choice)
Copy and paste the following code, instal the dependencies, and send an Algorand transaction in seconds!

```jsx
import React, {Component} from 'react'
import { AlgoButton, AlgoSendButton, Pipeline} from 'pipeline-express-react'

const myAlgoWallet = Pipeline.init();
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myAddress: "",
      recipient: "",
      amount: 0,
      note: "",
      txID: ""
    }
  }

  inputRecipient = (event) => {
    this.setState({ recipient: event.target.value });
  }

  inputAmount = (event) => {
    this.setState({amount: event.target.value});
  }

  inputNote = (event) => {
    this.setState({note: event.target.value});
  }
  
  render() {
    return <div align="center"><br></br>
      <AlgoButton wallet={myAlgoWallet} context={this} returnTo={"myAddress"} />
      <h3>{"My Address: " + this.state.myAddress}</h3>
      <form >
        <label>
          Recipient:
          <input type="text" onChange={this.inputRecipient} />
        </label><br></br>
        <label>
          Amount:
          <input type="number" onChange={this.inputAmount} />
        </label>
        <label><br></br>
          Note:
          <input type="text" onChange={this.inputNote} />
        </label>
      </form>
      <AlgoSendButton
      asset={"Algorand"} //If ASA, must be a numeric index value
      recipient={this.state.recipient} //string value
      amount={this.state.amount} //integer value in micro Algos
      note={this.state.note} //string value
      myAddress={this.state.myAddress} //string value
      wallet={myAlgoWallet} //reference to an instance of Pipeline.init(); that is called once when the app is initialized
      context={this}
      returnTo={"txID"}// string value of state key to return the transaction id
      />
      <h3>{"Transaction ID: " + this.state.txID}</h3>
</div>
  }
}

export default App;
```
## License

MIT © [headline-design](https://github.com/headline-design)
