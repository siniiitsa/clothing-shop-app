export function historyFetchDataSuccess(history) {
  return {
    type: "HISTORY_DATA_SUCCESS",
    payload: history
  };
}
export function getOrderHistoryFetch(url) {
  let token = JSON.parse(localStorage.getItem("userAuth"));
  console.log(token);
  return async dispatch => {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${token.token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(history => {
        console.log(history, "fetch");
        dispatch(historyFetchDataSuccess(history));
      });
  };
}
