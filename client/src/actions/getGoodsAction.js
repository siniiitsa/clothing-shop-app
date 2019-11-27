export const GET_GOODS_SUCCESS = "GET_GOODS_SUCCESS";

export function getGoods(collection) {
  return async dispatch => {
    await fetch(`http://localhost:8080/product-list?collection=${collection}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(goods => {
        let goodsList = [];
        let goodsArr = goods.mens || goods.womens || goods.acs;
        for (let key in goodsArr) {
          let goodItems = {
            id: goodsArr[key]._id,
            name: goodsArr[key].name,
            image: goodsArr[key].image,
            description: goodsArr[key].description,
            price: goodsArr[key].price,
            ref: goodsArr[key].ref,
            new: goodsArr[key].new
          };
          goodsList.push(goodItems);
        }
        dispatch({
          type: GET_GOODS_SUCCESS,
          payload: goodsList
        });
      })
      .catch(err => {
        return new Error(err);
      });
  };
}
