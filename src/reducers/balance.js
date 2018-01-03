import * as constants from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const BALANCE_COOKIE = "balance:cookie";

export default function balanceReducer(state = 0, action) {
  let balance;
  switch (action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT:
      balance = action.deposit + state;
      break;
    case constants.WITHDRAW:
      balance = state - action.withdraw;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }
  bake_cookie(BALANCE_COOKIE, balance);
  return balance;
}
