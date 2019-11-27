export const GET_FIRST_FILTER_PATH = "GET_FIRST_FILTER_PATH"

export function getFilterPath() {
    return async (dispatch) => {
        let categoryName = null;
        if (window.location.pathname === "/product-list/mens"){
                    categoryName = "Man";
                } else if (window.location.pathname === "/product-list/womens") {
                    categoryName = "Woman";
                } else if (window.location.pathname === "/product-list/accessories") {
                    categoryName = "Accessories";
                }
                dispatch({
                    type: GET_FIRST_FILTER_PATH,
                    payload: categoryName,
                })
    }
}