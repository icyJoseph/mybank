import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";

describe("Wallet", () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays the balance from props", () => {
    expect(wallet.find(".balance").text()).toEqual(
      `Wallet balance: ${props.balance}`
    );
  });

  it("creates an input field to deposit/withdraw from the balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });
});
