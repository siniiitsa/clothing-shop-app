import {GET_FIRST_FILTER_PATH} from '../../actions/getFilterPathAction';

const initialState = {
  firstFilterPath: '',
};

export function getFilterPath(state = initialState, action) {
  switch (action.type) {
    case GET_FIRST_FILTER_PATH:{
      return {
        ...state,
        firstFilterPath: action.payload,
      }
    }
    default:
      return state;
  }
}