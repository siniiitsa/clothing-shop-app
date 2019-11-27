import { addOrderHistoryPost } from "../actions/addOrderHistory";
export const GET_GOODS_DETAIL = "GET_GOODS_DETAIL";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const SET_CHECKOUT_TOTAL = "SET_CHECKOUT_TOTAL";
export const DEC_CART_PRODUCT_QUANTITY = "INC_CART_PRODUCT_QUANTITY";
export const INC_CART_PRODUCT_QUANTITY = "DEC_CART_PRODUCT_QUANTITY";
export const SAVE_USER_CART = "SAVE_USER_CART";
export const UPDATE_CART = "UPDATE_CART";
export const SET_PREV_PAGE_PATH = "SET_PREV_PAGE_PATH";
export const UPDATE_PURCHASE_HISTORY = "UPDATE_PURCHASE_HISTORY";
export const ADD_TO_CART = "ADD_TO_CART";
export const SHOW_CHECKOUT_MODAL = "SHOW_CHECKOUT_MODAL";
export const HIDE_CHECKOUT_MODAL = "HIDE_CHECKOUT_MODAL";
export const SET_COLOR = "SET_COLOR";
export const SET_SIZE = "SET_SIZE";

export function getGoodsDetailID(id) {
  return dispatch => {
    fetch(`http://localhost:8080/detail/${id}`)
      .then(res => res.json())
      .then(item => {
        let generalArr = item.men.concat(item.women, item.acs);
        let itemArr = [];
        for (let key in generalArr) {
          let items = {
            id: generalArr[key]._id,
            name: generalArr[key].name,
            image: generalArr[key].image,
            description: generalArr[key].description,
            price: generalArr[key].price,
            ref: generalArr[key].ref,
            new: generalArr[key].new,
            color: generalArr[key].color,
            images: generalArr[key].images,
            subCategory: generalArr[key].subCategory,
            category: generalArr[key].category,
            size: generalArr[key].size
          };
          itemArr.push(items);
        }
        dispatch({
          type: GET_GOODS_DETAIL,
          payload: itemArr
        });
      });
  };
}

export function removeProductFromCart(productId) {
  return { type: REMOVE_PRODUCT_FROM_CART, payload: productId };
}

export function setCheckoutTotal(totalValue) {
  return { type: SET_CHECKOUT_TOTAL, payload: totalValue };
}

export function incCartProductQuantity(productId) {
  return { type: INC_CART_PRODUCT_QUANTITY, payload: productId };
}

export function decCartProductQuantity(productId) {
  return { type: DEC_CART_PRODUCT_QUANTITY, payload: productId };
}

export function saveUserCart() {
  return { type: SAVE_USER_CART };
}

export function updateCart(newCart) {
  return { type: UPDATE_CART, payload: newCart };
}
export function setColor(color){
  console.log("color confirmation", color);
  return{type:SET_COLOR, payload:color}
}
export function setSize(size){
  console.log("size confirmation", size);
  return{type:SET_SIZE, payload:size}
}
export function setPrevPagePath(path) {
  return { type: SET_PREV_PAGE_PATH, payload: path };
}

export function updatePurchaseHistory(shoppingBag) {
  console.log(shoppingBag, "shopingBag action");
  addOrderHistoryPost("http://localhost:8080/api/history", shoppingBag);
  return { type: UPDATE_PURCHASE_HISTORY, payload: shoppingBag };
}

export function addToCart(product) {
  return { type: ADD_TO_CART, payload: product };
}

export function showCheckoutModal() {
  return { type: SHOW_CHECKOUT_MODAL };
}

export function hideCheckoutModal() {
  return { type: HIDE_CHECKOUT_MODAL };
}
