export default function reducer(state = {
  pos: null,
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return { ...state, fetching: true };
    case 'FETCH_USER_REJECTED':
      return { ...state, fetching: false, error: action.payload };
    case 'SET_MY_POS_FULFILLED':
      return {
        ...state,
        pos: action.payload
      };
    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: {'jf': {pos: {}}}
      };
    default:
      return state;
  }
}
