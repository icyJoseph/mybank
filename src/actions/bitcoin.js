import { FETCH_BITCOIN } from "./constants";
import axios from "axios";

// Bitcoin desk API end point
const apiEndPoint = `https://api.coindesk.com/v1/bpi/currentprice.json`;

export const fetchBitcoin = () => {
  return dispatch => {
    return axios
      .get(apiEndPoint)
      .then(res => dispatch({ type: FETCH_BITCOIN, bitcoin: res.data }));
  };
};
