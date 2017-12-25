const initialAuthState = { isLoggedIn: false };

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true, ...action.payload };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
