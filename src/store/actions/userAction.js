// import app from "../../components/base"
// import { SET_CURRENT_USER } from "./actionType"
import { setError } from "./errorAction";
import { loading } from "./loadingAction";
import { setMessage } from "./messageAction";
import Axios from "axios";
import { SET_CURRENT_USER } from "./actionTypes";
import UserAxios from "../axios/UserAxios";

// Sign up redux thunk action
export const signUpAction = (userData, history) => async dispatch => {
  dispatch(loading(true));
  Axios.get("https://ipapi.co/json/")
    .then(async response => {
      let data = response.data;
      userData.countryCode = data.country_code;

      try {
        let result = await Axios.post("/user/signup", userData);
        dispatch(setError());
        dispatch(loading(false));
        dispatch(setMessage({ signUpMes: "account created successfully" }));
        // console.log()
        let { type, _id } = result.data.user;
        if (type === "email") {
          localStorage.setItem("acc_create_email", _id.email);
          history.push("/confirm_account");
        }

        if (type === "phone") {
          localStorage.setItem("acc_create_phone", _id.phone);
          history.push("/confirm_account_phone");
        }
      } catch (error) {
        let { errors } = error.response.data;
        console.log(error.response);
        dispatch(loading(false));
        dispatch(setMessage({}));

        dispatch(setError({ signUpError: errors }));
      }
    })
    .catch(error => {
      console.log(error);
    });
};

// Login redux thunk action
export const loginAction = (userData, history) => async dispatch => {
  dispatch(loading(true));
  Axios.get("https://ipapi.co/json/")
    .then(async response => {
      let data = response.data;
      userData.countryCode = data.country_code;
      try {
        let result = await Axios.post("/user/login", userData);
        let { token } = result.data;
        token = `Bearer ${token}`;
        dispatch(setError());
        dispatch(loading(false));
        dispatch(setMessage({ loginMes: "Login successfully" }));

        localStorage.setItem("userToken", token);
        // dispatch(setUser({ name: "user" }))
        if (localStorage.getItem("userToken")) {
          dispatch(userProfile(localStorage.getItem("userToken")));
        }
        history.push("/profile/timeline");
      } catch (error) {
        // let { errors } = error.response.data;
        dispatch(loading(false));
        dispatch(setMessage({}));
        console.log(userData);
        if (userData.loginPlace === "forgotUser") {
          dispatch(
            setError({
              loginForgotUser: error.response.data.errors,
              loginMessage: error.response.data.message
            })
          );
          return;
        } else {
          history.push("/login");

          dispatch(
            setError({
              login: error.response.data.errors,
              loginMessage: error.response.data.message
            })
          );
        }
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const userProfile = (token, history) => async dispatch => {
  console.log(token);
  if (token) {
    UserAxios.defaults.headers.Authorization = token;
  }
  try {
    if (localStorage.getItem("userToken")) {
      let result = await UserAxios.post("/user/profile");
      // console.log(result.data.doctor)
      dispatch({
        type: SET_CURRENT_USER,
        payload: result.data.user
      });
    }
  } catch (err) {
    console.log(err);
    if (!err.response) {
      // console.log(history)
      // history.push("/")
      return;
    }
  }
};

export const activeAccount = (token, history) => async dispatch => {
  try {
    await Axios.post("/user/activateAccount/" + token);
    history.push("/login");
  } catch (err) {
    if (!err.response) {
      history.push("/server-error");
      return;
    }
    dispatch(setError({ userActiveAccountMessage: err.response.data.message }));
  }
};

export const activeAccountWithOtp = (data, history) => async dispatch => {
  try {
    let result = await Axios.post("/user/activeAccountWithOtp", data);
    let { token } = result.data;
    token = `Bearer ${token}`;
    dispatch(setError());
    dispatch(loading(false));
    dispatch(setMessage({ loginMes: "Login successfully" }));

    localStorage.setItem("userToken", token);
    // dispatch(setUser({ name: "user" }))
    if (localStorage.getItem("userToken")) {
      dispatch(userProfile(localStorage.getItem("userToken")));
    }
    history.push("/profile");
  } catch (err) {
    if (!err.response) {
      history.push("/server-error");
      return;
    }
    dispatch(
      setError({ userActiveAccountOtpMessage: err.response.data.message })
    );
  }
};

export const createForgotPasswordToken = (data, history) => async dispatch => {
  dispatch(loading({ resetPasswordToken: true }));
  try {
    let result = await Axios.post("/user/createForgotPasswardToken", data);
    dispatch(setError());
    dispatch(loading(false));
    if (data.identityType === "email") {
      history.push("/forgot_password_mail_verification");
    }
    if (data.identityType === "phone") {
      history.push("/forgot_password_phone_verification");
    }
  } catch (err) {
    dispatch(loading(false));
    if (!err.response) {
      history.push("/server-error");
      return;
    }
    dispatch(
      setError({ userActiveAccountOtpMessage: err.response.data.message })
    );
  }
};

export const logout = history => dispatch => {
  localStorage.removeItem("userToken");
  dispatch({
    type: SET_CURRENT_USER,
    payload: ""
  });
  history.push("/");
};

// Set user dispatch
export const setUser = userObj => {
  return {
    type: SET_CURRENT_USER,
    payload: userObj
  };
};
