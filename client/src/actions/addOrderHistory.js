export async function addOrderHistoryPost(url, data) {
  let token = JSON.parse(localStorage.getItem("userAuth"));
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.token}`
    },
    body: JSON.stringify(data)
  });
}
