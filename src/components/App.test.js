import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders without crashing", () => {
    expect(app).toMatchSnapshot();
  });

  describe("renders wallet", () => {
    it("displays wallet", () => {
      expect(app.find("Wallet").exists()).toBe(true);
    });
  });
});
