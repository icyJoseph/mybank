import * as constants from "../actions/constants";

export default function balanceReducer(state = 0, action) {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    default:
      return state;
  }
}
