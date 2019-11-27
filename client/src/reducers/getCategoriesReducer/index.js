import {
  GET_GOODS_CATEGORIES,
  SHOW_FILTER_MENU,
  SHOW_CATEGORU_MENU,
  WINDOW_DESCTOP,
  SHOW_COLOR_MENU,
  SHOW_PRICE_MENU,
  HANDL_SHENGE_PRICE
} from "../../actions/getGoodsCategoryAction";

const initialState = {
  colorsList: [],
  categoriesList: [],
  subCategoryList: [],
  categoryName: "",
  isShowFilterMenu: false,
  isShowCategoriMenu: true,
  isShowColorMenu: true,
  isShowPriceMenu: true,
  // priceValue: { min: 50, max: 300 }
  priceValue: null
};

export function allCategories(state = initialState, action) {
  switch (action.type) {
    case GET_GOODS_CATEGORIES: {
      return {
        ...state,
        categoriesList: action.payload,
        categoryName: action.payload1,
        colorsList: action.payload2,
        subCategoryList: action.payload3
      };
    }
    case SHOW_FILTER_MENU: {
      return {
        ...state,
        isShowFilterMenu: !state.isShowFilterMenu,
        isShowCategoriMenu: false,
        isShowColorMenu: false,
        isShowPriceMenu: false
      };
    }
    case SHOW_CATEGORU_MENU: {
      return {
        ...state,
        isShowCategoriMenu: !state.isShowCategoriMenu
      };
    }
    case SHOW_PRICE_MENU: {
      return {
        ...state,
        isShowPriceMenu: !state.isShowPriceMenu
      };
    }
    case SHOW_COLOR_MENU: {
      return {
        ...state,
        isShowColorMenu: !state.isShowColorMenu
      };
    }
    case WINDOW_DESCTOP: {
      return {
        ...state,
        isShowFilterMenu: false,
        isShowCategoriMenu: true,
        isShowPriceMenu: true,
        isShowColorMenu: true
      };
    }
    case HANDL_SHENGE_PRICE: {
      return {
        ...state,
        priceValue: action.payload
      };
    }
    default:
      return state;
  }
}
