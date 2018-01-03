import React, { Component } from "react";
import { connect } from "react-redux";

export class Wallet extends Component {
  state = {
    balance: undefined
  };

  updateBalance = e => {
    this.setState({ balance: parseInt(e.target.value, 10) });
  };
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
