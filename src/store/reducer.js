import Actions from "./Actions";
import { InitialState } from "./InitialState";

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case Actions.SET_USER_NAME:
      return {
        ...state,
        username: action.username,
      };
    case Actions.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export default reducer;
