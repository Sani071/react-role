import { setError } from "../errorAction";
import { loading } from "../loadingAction";
import { setMessage } from "../messageAction";
import Axios from "axios";
import UserAxios from "../../axios/UserAxios";
import { setUser } from "../userAction";
import { SET_FORGOT_USER, SET_FORGOT_USERS } from "../actionTypes";
export const profilePic = data => async dispatch => {
  console.log(data);
  try {
    let result = await UserAxios.post("/user/profilePic", data);
    dispatch(setUser(result.data.user));
  } catch (err) {}
};

export const coverPhotoAction = data => async dispatch => {
  console.log(data);
  try {
    let result = await UserAxios.post("/user/coverPhoto", data);
    dispatch(setUser(result.data.user));
  } catch (err) {}
};

export const basicInformationAction = data => async dispatch => {
  dispatch(loading(true));
  try {
    let result = await UserAxios.post("/user/basicInformation", data);
    dispatch(setUser(result.data.user));
    dispatch(setError());
    dispatch(loading(false));
    dispatch(
      setMessage({ basicInformation: "Basic Information updated successfully" })
    );
  } catch (err) {
    let { errors } = err.response.data;
    dispatch(loading(false));
    dispatch(setMessage({}));

    dispatch(setError({ basicInformationError: errors }));
  }
};

export const updateIntro = data => async dispatch => {
  dispatch(loading({ updateIntro: true }));
  try {
    let result = await UserAxios.post("/user/intro", data);
    dispatch(setUser(result.data.user));
    dispatch(setError());
    dispatch(loading(false));
    dispatch(setMessage({ basicInformation: "Intro successfully" }));
  } catch (err) {
    let { errors } = err.response.data;
    dispatch(loading(false));
    dispatch(setMessage({}));

    dispatch(setError({ basicInformationError: errors }));
  }
};

export const updateOccupation = data => async dispatch => {
  // dispatch(loading(true));
  dispatch(loading({ updateOccupation: true }));
  try {
    let result = await UserAxios.post("/user/occupation", data);
    dispatch(setUser(result.data.user));
    dispatch(setError());
    dispatch(loading(false));
    dispatch(setMessage({ basicInformation: "occupation successfully" }));
  } catch (err) {
    let { errors } = err.response.data;
    dispatch(loading(false));
    dispatch(setMessage({}));

    dispatch(setError({ basicInformationError: errors }));
  }
};

export const updatePersonalInformation = data => async dispatch => {
  dispatch(loading({ updatePersonalInformation: true }));
  try {
    let result = await UserAxios.post("/user/personalInformation", data);
    dispatch(setUser(result.data.user));
    dispatch(setError());
    dispatch(loading(false));
    dispatch(setMessage({ basicInformation: "occupation successfully" }));
  } catch (err) {
    let { errors } = err.response.data;
    dispatch(loading(false));
    dispatch(setMessage({}));

    dispatch(setError({ basicInformationError: errors }));
  }
};

export const updateLanguage = data => async dispatch => {
  dispatch(loading({ updateLanguage: true }));
  try {
    let result = await UserAxios.post("/user/language", data);
    dispatch(setUser(result.data.user));
    dispatch(setError());
    dispatch(loading(false));
    dispatch(setMessage({ basicInformation: "occupation successfully" }));
  } catch (err) {
    let { errors } = err.response.data;
    dispatch(loading(false));
    dispatch(setMessage({}));

    dispatch(setError({ basicInformationError: errors }));
  }
};

export const updateAmbition = data => async dispatch => {
  dispatch(loading({ updateAmbition: true }));
  try {
    let result = await UserAxios.post("/user/ambition", data);
    dispatch(setUser(result.data.user));
    dispatch(setError());
    dispatch(loading(false));
    dispatch(setMessage({ basicInformation: "occupation successfully" }));
  } catch (err) {
    let { errors } = err.response.data;
    dispatch(loading(false));
    dispatch(setMessage({}));

    dispatch(setError({ basicInformationError: errors }));
  }
};

export const userFindAccount = (userData, history) => async dispatch => {
  dispatch(loading({ userFindAccount: true }));

  Axios.get("https://ipapi.co/json/")
    .then(async response => {
      let data = response.data;
      userData.countryCode = data.country_code;
      try {
        let result = await Axios.post("/user/userFindAccount", userData);
        let { responseType, user } = result.data;

        dispatch(setError());
        dispatch(loading(false));
        dispatch(
          setMessage({ userFindAccount: "User find account successfully" })
        );

        if (responseType === "email" || responseType === "phone") {
          dispatch({ type: SET_FORGOT_USER, payload: user });
          history.push("/forgot_user_profile");
        }
        if (responseType === "profileName") {
          dispatch({ type: SET_FORGOT_USERS, payload: user });
          history.push("/forgot_user_profiles");
        }
      } catch (err) {
        let { errors } = err.response.data;
        dispatch(loading(false));
        dispatch(setMessage({}));
        dispatch(setError({ userFindAccountError: errors }));
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const meHandlerAction = (data, history) => dispatch => {
  dispatch({ type: SET_FORGOT_USER, payload: data });
  history.push("/forgot_user_profile");
};


export const checkOtpForResetPasswordAction = (data, history) => async dispatch => {
  dispatch(loading({ checkOtpForResetPassword: true }));
 
  try {
    let result = await Axios.post("/user/checkOtpForResetPassword", data);
    let {resetPasswordToken} = result.data
    dispatch(setError())
    dispatch(loading(false));
    history.push(resetPasswordToken)
  } catch (err) {
    dispatch(loading(false));
    if (!err.response) {
      history.push("/server-error");
      return;
    }
    
    dispatch(
      setError({ checkOtpForResetPasswordError: err.response.data.message })
    );
  }
};

export const userResetPassword = (userData, token, history) => async dispatch => {
  dispatch(loading({ userResetPassword: true }));
  try {
      await Axios.put("/user/resetPassword/" + token, userData)
      dispatch(setError());
      dispatch(loading(false));
      history.push("/login");
  } catch (err) {
    dispatch(loading(false));
      if (!err.response) {
          history.push("/server-error")
          return
      }
      dispatch(setError({ userResetPassword: err.response.data.errors, userResetPasswordMessage: err.response.data.message }))
  }
}
