import React, { Component } from "react";
import { connect } from "react-redux";

export class Wallet extends Component {
  render() {
    const { balance } = this.props;
    return (
      <div>
        <h3 className="balance">Wallet balance: {balance}</h3>
      </div>
    );
  }
}

export default connect(state => {
  balance: state.balance;
}, null)(Wallet);
