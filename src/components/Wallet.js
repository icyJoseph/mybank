import React, { Component } from "react";
import { connect } from "react-redux";
import { balance } from "../actions/balance";

export class Wallet extends Component {
  state = {
    balance: undefined
  };

  updateBalance = e => {
    this.setState({ balance: parseInt(e.target.value, 10) });
  };

  deposit = () => this.props.deposit(this.state.balance);

  render() {
    const { balance } = this.props;
    return (
      <div>
        <h3 className="balance">Wallet balance: {balance}</h3>
        <br />
        <input
          type="text"
          className="input-wallet"
          onChange={this.updateBalance}
        />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    balance: state
  }),
  null
)(Wallet);
