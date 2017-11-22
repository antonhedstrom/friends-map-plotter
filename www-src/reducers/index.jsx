import { combineReducers } from 'redux';

import user from './user.reducer';
import friends from './friends.reducer';

export default combineReducers({
  user,
  friends
});
