import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { FETCH_BITCOIN } from "./constants";
import { fetchBitcoin } from "./bitcoin";

// Mock the Redux Store
// Returns a function that allows you to create a store
// it takes an array of middleware
const createMockStore = configureMockStore([thunk]);
// Pass data into the store
const store = createMockStore({ bitcoin: {} });
// See www.coindesk.com/api for the format of a response
const mockResponse = { body: { bpi: "bitcoin price index" } };
// set mock adapter
const mockAxios = new MockAdapter(axios);

// Bitcoin desk API end point
const apiEndPoint = `https://api.coindesk.com/v1/bpi/currentprice.json`;

// The onGet method will return the mockResponse from axios calls
mockAxios.onGet(apiEndPoint).reply(200, {
  mockResponse
});

it("creates an async action to fetch the bitcoin value", () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];

  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
