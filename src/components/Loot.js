import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  calculateBitcoinValue = (bitcoin, balance) => {
    return bitcoin.bpi
      ? balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10)
      : "";
  };

  render() {
    const { balance, bitcoin } = this.props;
    return (
      <div>
        <h3>Bitcoin balance: {this.calculateBitcoinValue(bitcoin, balance)}</h3>
        <p>
          Powered By{" "}
          <a
            href="https://www.coindesk.com/price"
            target="_blank"
            rel="noopener noreferrer"
          >
            CoinDesk
          </a>
        </p>
      </div>
    );
  }
}

export default connect(
  state => ({
    balance: state.balance,
    bitcoin: state.bitcoin
  }),
  { fetchBitcoin }
)(Loot);
