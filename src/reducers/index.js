import { combineReducers } from 'redux';

import { default as authReducer } from './authReducer';
import { default as navReducer } from './navReducer';
import { default as sentenceReducer } from './sentenceReducer';

const AppReducer = combineReducers({
  nav: navReducer,
  auth: authReducer,
  sentence: sentenceReducer,
});

export default AppReducer;
