import { actionTypes } from "../Types/actionTypes";

const initialState = {
  visible: false,
};

export const ModalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.OPEN_MODAL:
      return { ...state, visible: true };
    case actionTypes.CLOSE_MODAL:
      return { ...state, visible: false };

    default:
      return state;
  }
};
