import React, { Component } from "react";
import Wallet from "./Wallet";
import Loot from "./Loot";

class App extends Component {
  render() {
    return (
      <div>
        <h2>My Bank</h2>
        <hr />
        <Wallet />
        <hr />
        <Loot />
      </div>
    );
  }
}

export default App;
