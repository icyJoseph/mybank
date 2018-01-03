import * as constants from "../actions/constants";

export default function balanceReducer(state = 0, action) {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
      return action.deposit + state;
    default:
      return state;
  }
}
