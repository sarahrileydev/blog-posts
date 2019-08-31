export default (state = [], action) => {
  //reducers are pure - state + action
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
