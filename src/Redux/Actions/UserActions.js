import { UserService } from "../../services/UserService";
import { TOKEN, USER } from "../../util/settings/config";
import { history } from "../../util/settings/history";
import { actionTypes } from "../Types/actionTypes";
import { createActions } from "./CreateActions";

export const UserLogin = (info) => {
  return async (dispatch) => {
    try {
      const { data } = await UserService.login(info);
      dispatch(createActions(actionTypes.SET_USER, data.content));
      localStorage.setItem(TOKEN, data.content.accessToken);
      localStorage.setItem(USER, JSON.stringify(data.content));
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };
};
export const UserRegister = async (info) => {
  try {
    await UserService.register(info);
    history.push("/login");
  } catch (err) {
    console.log(err);
  }
};
