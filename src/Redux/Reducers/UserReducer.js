import { USER } from "../../util/settings/config";
import { actionTypes } from "../Types/actionTypes";

const initialState = {
  user: {},
};

let userLocal = {};
if (localStorage.getItem(USER)) {
  userLocal = JSON.parse(localStorage.getItem(USER));
}
initialState.user = userLocal;
export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, user: payload };
    default:
      return { ...state, user: userLocal };
  }
};
