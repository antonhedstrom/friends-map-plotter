
import getPos from '../components/geolocation';

export function fetchUser() {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_USER_FULFILLED',
      payload: {
        name: 'Anton from action.'
      }
    });
  };
}

export function updateMyPos(dispatch) {
  getPos().then(pos => {
    dispatch({
      type: 'SET_MY_POS_FULFILLED',
      payload: pos
    });
  })
}

export function updateUser(user) {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_USER_FULFILLED',
      payload: {
        name: 'Anton from action.'
      }
    });
  };
}
