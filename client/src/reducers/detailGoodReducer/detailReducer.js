import {
    GET_GOODS_DETAIL,
    REMOVE_PRODUCT_FROM_CART,
    SET_CHECKOUT_TOTAL,
    DEC_CART_PRODUCT_QUANTITY,
    INC_CART_PRODUCT_QUANTITY,
    SAVE_USER_CART,
    UPDATE_CART,
    SET_PREV_PAGE_PATH,
    UPDATE_PURCHASE_HISTORY,
    ADD_TO_CART,
    SHOW_CHECKOUT_MODAL,
    HIDE_CHECKOUT_MODAL,
    SET_COLOR,
    SET_SIZE
} from '../../actions/detailGoodsAction';

const initialState = {
    objectId: [],
    checkoutTotal: 0,
    checkoutModalActive: false,
    prevPagePath: '',
    purchaseHistory: [],
    shoppingBag: localStorage.getItem('shoppingBag')
        ? JSON.parse(localStorage.getItem('shoppingBag'))
        : []
};

export const activeGoodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GOODS_DETAIL: {
            return {
                ...state,
                objectId: action.payload
            };
        }
        case REMOVE_PRODUCT_FROM_CART: {
            const shoppingBag = state.shoppingBag.filter(
                product => product.id !== action.payload
            );
            return {...state, shoppingBag};
        }
        case SET_CHECKOUT_TOTAL: {
            const checkoutTotal = action.payload;
            return {...state, checkoutTotal};
        }
        case INC_CART_PRODUCT_QUANTITY: {
            const shoppingBag = state.shoppingBag.map(product => {
                return product.id === action.payload
                    ? {...product, quantity: product.quantity + 1}
                    : {...product};
            });
            return {...state, shoppingBag};
        }
        case DEC_CART_PRODUCT_QUANTITY: {
            const shoppingBag = state.shoppingBag.map(product => {
                return product.id === action.payload && product.quantity > 1
                    ? {...product, quantity: product.quantity - 1}
                    : {...product};
            });
            return {...state, shoppingBag};
        }
        case SAVE_USER_CART: {
            localStorage.setItem('shoppingBag', JSON.stringify(state.shoppingBag));
            return {...state};
        }
        case UPDATE_CART: {
            return {...state, shoppingBag: action.payload};
        }
        case SET_COLOR: {
            let objectId = [{...state.objectId[0], pickedColor: action.payload}];
            return {...state, objectId}
        }
        case SET_SIZE: {
            let objectId = [{...state.objectId[0], pickedSize: action.payload}];
            return {...state, objectId}
        }
        case SET_PREV_PAGE_PATH: {
            const prevPagePath = action.payload;
            return {...state, prevPagePath};
        }
        case UPDATE_PURCHASE_HISTORY: {
            const purchaseHistory = [...state.purchaseHistory, ...state.shoppingBag];
            const shoppingBag = [];
            localStorage.removeItem('shoppingBag');
            return {...state, purchaseHistory, shoppingBag};
        }
        case ADD_TO_CART: {
            console.log(state.objectId);
            
            const date = new Date();
            const currentDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
            const product = {
                id: action.payload.id,
                category: action.payload.category,
                name: action.payload.name,
                price: +action.payload.price,
                color: state.objectId[0].pickedColor || "no color", // сюда нужно подставлять выбранный цвет
                quantity: 1,
                reference: action.payload.ref,
                size: state.objectId[0].pickedSize || "no size", // хардкод, нужно поменять
                image: action.payload.image[0],
                date: currentDate
            };
            return {...state, shoppingBag: [...state.shoppingBag, product]};
        }
        case SHOW_CHECKOUT_MODAL: {
            return {...state, checkoutModalActive: true};
        }
        case HIDE_CHECKOUT_MODAL: {
            return {...state, checkoutModalActive: false};
        }
        default:
            return {...state};
    }
};
