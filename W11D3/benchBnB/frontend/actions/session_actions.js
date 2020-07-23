import { signUp, login, logout } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS"

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const makeNewUser = (formUser) => (dispatch) =>
  signUp(formUser).then((user) => dispatch(receiveCurrentUser(user)));

export const signin = (formUser) => (dispatch) =>
  login(formUser).then((user) => dispatch(receiveCurrentUser(user)));

export const signout = () => (dispatch) =>
  logout().then(() => dispatch(logoutCurrentUser()));
