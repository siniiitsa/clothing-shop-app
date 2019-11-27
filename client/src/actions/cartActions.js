
export const ADD_TO_CART = "ADD_TO_CART";

export  function addToCart(id, count) {
    console.log("working");

    return async (dispatch) => {
        await dispatch({
            type: 'ADD_TO_CART',
            id: id,
            count: count,
        })

    }
}
