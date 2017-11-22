export default function reducer(state = {
  friends: {},
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_FRIENDS':
      return { ...state, fetching: true };
    case 'FETCH_FRIENDS_REJECTED':
      return { ...state, fetching: false, error: action.payload };
    case 'FETCH_FRIENDS_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        friends: action.payload
      };
    default:
      return state;
  }
}
