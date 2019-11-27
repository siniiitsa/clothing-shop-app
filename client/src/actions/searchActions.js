export const SHOW_MODAL_WINDOW = "SHOW_MODAL_WINDOW";
export const SEARCH_ACTION = "SEARCH_ACTION";

export function searchGoods(searchKeywords) {
  return async dispatch => {
    let mens = await searchInProductListDb("mens");
    let womens = await searchInProductListDb("womens");
    let accessories = await searchInProductListDb("accessories");
    let allGoods = [...mens, ...womens, ...accessories];
    let findedGoods = [];

    if (searchKeywords && allGoods.length) {
      findedGoods = allGoods.filter(item => {
        const productNameWord = item.name.toLowerCase().split(" ");
        const searchInputTextWord = searchKeywords.toLowerCase().split(" ");
        const productNameLetter = item.name.toLowerCase().split("");
        const searchInputTextLetter = searchKeywords.toLowerCase().split("");
        let text = "";
        let search = "";
        for (let i = 0; i < searchInputTextWord.length; i++) {
          if (productNameWord.includes(searchInputTextWord[i])) {
            return true;
          }
        }
        for (let i = 0; i < searchInputTextLetter.length; i++) {
          text += productNameLetter[i] ? productNameLetter[i] : "";
          search += searchInputTextLetter[i] ? searchInputTextLetter[i] : "";
        }
        if (text === search) {
          return true;
        }
      });
    }
    console.log(findedGoods, "fiiiiiiiiiiiiiiiiiiind");
    dispatch({
      type: SEARCH_ACTION,
      payload: findedGoods
    });
  };
}

async function searchInProductListDb(category) {
  let goodsList = [];
  await fetch(`http://localhost:8080/product-list?collection=${category}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(goods => {
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
    })
    .catch(err => {
      return new Error(err);
    });
  return goodsList;
}
