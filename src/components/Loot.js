import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  render() {
    const { bitcoin } = this.props;
    return (
      <div>
        <h3>Bitcoin balance: {bitcoin.bpi}</h3>
        <p>Powered By CoinDesk</p>
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
