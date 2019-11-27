import { GOODS_PRICE } from "../../actions/rangeSliderAction";

const initialState = {
  min: 0,
  max: 0
};

export default function rangeSliderReducer(state = initialState, action) {
  switch (action.type) {
    case GOODS_PRICE: {
      return { ...state, min: action.min, max: action.max };
    }
    default:
      return state;
  }
}
