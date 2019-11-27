import {
  SHOW_MODAL_WINDOW,
  SEARCH_ACTION
} from "../../../actions/searchActions";

const initalState = {
  showSearchModal: false,
  searchResults: []
};

function searchReducer(state = initalState, action) {
  switch (action.type) {
    case SHOW_MODAL_WINDOW: {
      return { ...state, showSearchModal: !state.showSearchModal };
    }
    case SEARCH_ACTION: {
      // console.log(action.payload, "----------------------------");
      return { ...state, searchResults: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}

export default searchReducer;
