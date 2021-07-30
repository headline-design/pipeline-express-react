import React, {Component} from 'react'
import { AlgoButton, AlgoSendButton, Pipeline} from 'pipeline-express-react'
import './index.css'
import logo from './pipeline-express.svg'

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
    return <div align="center" class="card"><img alt="Pipeline Express" src={logo} width="300"></img><br></br>
      <AlgoButton wallet={myAlgoWallet} context={this} returnTo={"myAddress"} />
      <h3>{"My Address: " + this.state.myAddress}</h3>
      <form >
        <label class= "form-label">
          Recipient:
          <input type="text" class="form-control" onChange={this.inputRecipient} />
        </label><br></br>
        <label class="form-label">
          Amount:
          <input type="number" class="form-control" onChange={this.inputAmount} />
        </label>
        <label class="form-label"><br></br>
          Note:
          <input type="text" class="form-control" onChange={this.inputNote} />
        </label>
      </form>
      <AlgoSendButton
      index={0} //If ASA, must be a numeric index value !== 0
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
