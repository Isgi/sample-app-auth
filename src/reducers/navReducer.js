import { NavigationActions } from 'react-navigation';

import { Root } from '../AppNavigator';

//initial router to login screen
const firstAction = Root.router.getActionForPathAndParams('Login');
const initialNavState = Root.router.getStateForAction(
  firstAction,
);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = Root.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home'})
          ]
        }),
        state
      );
      break;
    case 'Logout':
      nextState = Root.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Login'})
          ]
        }),
        state
      );
      break;
    default:
      nextState = Root.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
