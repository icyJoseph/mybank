import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
  render() {
    const { bitcoin } = this.props;
    return (
      <div>
        <h3>Powered By CoinDesk</h3>
        <h3>Bitcoin balance: {bitcoin}</h3>
      </div>
    );
  }
}

export default connect(
  state => ({
    bitcoin: state.bitcoin
  }),
  { fetchBitcoin }
)(Loot);
