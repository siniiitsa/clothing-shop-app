const initialState = {
  orderHistoryArr: []
};

export function listHistory(state = initialState, action) {
  switch (action.type) {
    case "HISTORY_DATA_SUCCESS":
      return {
        ...state,
        orderHistoryArr: action.payload
      };
    default:
      return state;
  }
}
