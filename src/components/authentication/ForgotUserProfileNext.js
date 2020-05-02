import React, { useState } from "react";
import Authnav from "../common/AuthNav";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import Select from "../common/Select";
import AuthFooter from "../common/AuthFooter";
// import UserProfile from "../../assets/images/landing/user_profile.png";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "../../assets/images/profile/profile.png";
import { loginAction } from "../../store/actions/userAction";
import { Spinner } from "reactstrap";
import { parsePhoneNumberFromString } from "libphonenumber-js";
const ForgotUserProfileNext = ({ history }) => {
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.forgotUser.forgotUser);
  const isForgotUserAuthenticated = useSelector(
    state => state.forgotUser.isForgotUserAuthenticated
  );
  if (!isForgotUserAuthenticated) {
    history.push("/forgot_account");
  }
  let [passwordIcon, setPasswordIcon] = useState(true);
  const dispatch = useDispatch();

  const forgotLinkHandler = () => {
    history.push("/forgot_password");
  };
  const error = useSelector(state => state.error.loginForgotUser);
  const loading = useSelector(state => state.meta.isLoading);
  const passShowHandler = () => {
    setPasswordIcon(!passwordIcon);
    var x = document.getElementById("forgot-login-id");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  let numberPhone = user.phone;
  const submitHandler = e => {
    e.preventDefault();
    let phoneNumber;
    if (numberPhone) {
      phoneNumber = parsePhoneNumberFromString(numberPhone);
      phoneNumber = phoneNumber.formatNational();
      phoneNumber = phoneNumber.replace("-", "");
    }

    let data = {
      email: user.email ? user.email : phoneNumber,
      password: password,
      loginPlace: "forgotUser"
    };
    dispatch(loginAction(data, history));
  };

  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area forgot-user-profie-next">
        <div className="roy-container text-center forgot-user-profile">
          <div className="auth-form-main-area">
            <div className="afa-header">
              {/* <h3>This ID is matching with your information </h3> */}
            </div>
            <img
              src={user.photo ? user.photo : UserProfile}
              alt="UserProfile"
            />
            <h4>{user.name}</h4>
            {/* <p className="f-16">Is this you?</p> */}
            <form onSubmit={submitHandler}>
              <div className="forgot-enter-password">
                <Input
                  leftIcon="fas fa-lock"
                  type="password"
                  placeholder="Enter password"
                  id="forgot-login-id"
                  error={error ? error.password : null}
                  // rightIcon="fas fa-eye-slash"
                  onChange={e => setPassword(e.target.value)}
                  rightIcon={passwordIcon ? "fas fa-eye-slash" : "far fa-eye"}
                  passShowHandler={passShowHandler}
                />

                <Button
                  type="submit"
                  text={loading ? <Spinner></Spinner> : "Login"}
                  classNames={["continue-btn", "loading-btn"]}
                />
              </div>
            </form>
            <div className="forgot-auth-button">
              <Button
                text="Forgot your password?"
                classNames={["border-btn", "light-btn"]}
                type="button"
                onClick={forgotLinkHandler}
              />
            </div>
          </div>
        </div>
      </main>

      <AuthFooter />
    </React.Fragment>
  );
};

export default ForgotUserProfileNext;
