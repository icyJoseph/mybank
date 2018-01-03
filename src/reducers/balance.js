import * as constants from "../actions/constants";

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
      balance = state;
  }
  return balance;
}
