import { EDIT_MY_PROFILE } from "../../../actions/editMyProfileActions";

const initalState = {
  editMyProfile: false
};


function editMyPofile (state = initalState, action) {
  switch (action.type) {
    case EDIT_MY_PROFILE: {
      return { ...state, editMyProfile: !state.editMyProfile }
    }
    default: {
      return { ...state };
    }
  }
}

export default editAboutUserReducer;
