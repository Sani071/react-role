import React, { useState } from "react";
import Authnav from "../common/AuthNav";
import Input from "../common/Input";
import Button from "../common/Button";
// import { Link } from "react-router-dom";
// import Select from "../common/Select";
import AuthFooter from "../common/AuthFooter";
import { MDBAlert } from "mdbreact";

import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "reactstrap";
import { userResetPassword } from "../../store/actions/user/userProfile";
const ResetForgotPassword = ({ history, match }) => {
  // let [passShow, setPassShow] = useState(false);
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [passwordIcon, setPasswordIcon] = useState(true);
  let [confirmPasswordIcon, setConfirmPasswordIcon] = useState(true);
  const error = useSelector(state => state.error.userResetPassword);
  const message = useSelector(state => state.error.userResetPasswordMessage);
  const isLoading = useSelector(
    state => state.meta.isLoading.userResetPassword
  );
  const dispatch = useDispatch();

  const passShowHandler = () => {
    var x = document.getElementById("rest-signup-id");
    setPasswordIcon(!passwordIcon);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const passConfirmShowHandler = () => {
    var x = document.getElementById("rest-id-confirm");
    setConfirmPasswordIcon(!confirmPasswordIcon);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const submitHandler = e => {
    e.preventDefault();
    let { token } = match.params;
    let data = {
      password,
      confirmPassword
    };
    dispatch(userResetPassword(data, token, history));
  };

  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area reset-forgot-password-area">
        <div className="roy-container">
          <div className="auth-form-main-area">
            <div className="afa-header">
              <h3>Just one more step, choose a new password</h3>
              <p className="f-16">
                Password must include at least 8 characters
              </p>
            </div>
            <form onSubmit={submitHandler}>
              {message && <MDBAlert color="danger">{message}</MDBAlert>}
              <div className="auth-form-area">
                <Input
                  leftIcon="fas fa-lock"
                  type="password"
                  id="rest-signup-id"
                  placeholder="Create password"
                  rightIcon={passwordIcon ? "fas fa-eye-slash" : "far fa-eye"}
                  passShowHandler={passShowHandler}
                  onChange={e => setPassword(e.target.value)}
                  error={error ? error.password : null}
                />
                <Input
                  leftIcon="fas fa-lock"
                  type="password"
                  id="rest-id-confirm"
                  rightIcon={
                    confirmPasswordIcon ? "fas fa-eye-slash" : "far fa-eye"
                  }
                  placeholder="Confirm password"
                  passShowHandler={passConfirmShowHandler}
                  onChange={e => setConfirmPassword(e.target.value)}
                  error={error ? error.confirmPassword : null}
                />
                {/* <MDBInput
                label="Log out from all other devices"
                filled
                type="checkbox"
                id="checkbox1"
              /> */}
                <Button
                  // text="Submit"
                  text={isLoading ? <Spinner /> : "Submit"}
                  type="submit"
                  classNames={["display-un-block", "continue-btn"]}
                />
              </div>
            </form>
          </div>
        </div>
      </main>

      <AuthFooter />
    </React.Fragment>
  );
};

export default ResetForgotPassword;
