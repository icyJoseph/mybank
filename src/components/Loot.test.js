import React from "react";
import { mount, shallow } from "enzyme";
import { Loot } from "./Loot";

describe("Loot", () => {
  const mockfetchBitcoin = jest.fn();
  const props = { balance: 10, bitcoin: {} };
  let loot = shallow(<Loot {...props} />);

  it("renders properly", () => {
    expect(loot).toMatchSnapshot();
  });

  describe("when mounted", () => {
    beforeEach(() => {
      props.fetchBitcoin = mockfetchBitcoin;
      loot = mount(<Loot {...props} />);
    });

    it("dispatched the fetchBitcoint() it receives from props", () => {
      expect(mockfetchBitcoin).toHaveBeenCalled();
    });
  });
});
