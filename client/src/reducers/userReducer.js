export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    case 'LOGIN_FAILED':
      return null;
    default:
      return state;
  }
};
