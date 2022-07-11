const Actions = {
  SET_USER_NAME: "SET_USER_NAME",
  SET_IS_LOGGED_IN: "SET_IS_LOGGED_IN",
};

export const setUserName = (username) => {
  return {
    type: Actions.SET_USER_NAME,
    username,
  };
};

export const setIsLoggedIn = (isLoggedIn) => {
  return {
    type: Actions.SET_IS_LOGGED_IN,
    isLoggedIn,
  };
};

export default Actions;
