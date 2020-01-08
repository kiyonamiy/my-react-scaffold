import { combineReducers } from 'redux';

import exampleReducer from '../routes/Example/store/reducer';

export default combineReducers({
  example: exampleReducer
});
