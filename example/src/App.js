import React, {Component} from 'react'
import { AlgoButton, AlgoSendButton, Pipeline} from 'pipeline-express-react'
import 'pipeline-express-react/dist/index.css'
import logo from './pipeline-express.jpg'

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
    return <div align="center"> <img src={logo}></img><br></br>
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
