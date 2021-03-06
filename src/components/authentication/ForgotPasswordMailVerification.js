import React, { useState } from "react";
import Authnav from "../common/AuthNav";
import Button from "../common/Button";
import AuthFooter from "../common/AuthFooter";
import { MDBInput } from "mdbreact";
import Input from "../common/Input";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MDBAlert } from "mdbreact";
import { checkOtpForResetPasswordAction } from "../../store/actions/user/userProfile";
import { Spinner } from "reactstrap";
const ForgotPasswordMailVerification = ({ history }) => {
  const [number, setNumber] = useState("");
  const user = useSelector(state => state.forgotUser.forgotUser);
  const isForgotUserAuthenticated = useSelector(
    state => state.forgotUser.isForgotUserAuthenticated
  );
  // const continueHandler = val => {
  //   history.push("/reset_forgot_password");
  // };
  const isLoading = useSelector(
    state => state.meta.isLoading.checkOtpForResetPassword
  );

  if (!isForgotUserAuthenticated) {
    history.push("/forgot_account");
  }
  const dispatch = useDispatch();
  const message = useSelector(
    state => state.error.checkOtpForResetPasswordError
  );
  const continueHandler = e => {
    e.preventDefault();
    let data = {
      type: "email",
      email: user.email,
      otp: number
    };
    dispatch(checkOtpForResetPasswordAction(data, history));
  };
  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area forgot-password-auth verification">
        <div className="roy-container">
          <div className="auth-form-main-area">
            <div className="afa-header">
              <h3>We have just sent you a verification code</h3>
              <p className="f-16">
                We have just sent you a verification code to this email{" "}
                <span> {user.email}</span> . If you don't see our email in your
                inbox, please check your spam folder.
              </p>
            </div>
            {message && <MDBAlert color="danger">{message}</MDBAlert>}
            {message && <h3>Sorry! Please enter your code correctly</h3>}

            <form onSubmit={continueHandler}>
              <div className="auth-form-area">
                <Input
                  type="number"
                  onChange={e => setNumber(e.target.value)}
                />

                <Button
                  text={isLoading ? <Spinner /> : "Submit"}
                  classNames={["display-un-block", "continue-btn"]}
                  disabled={number ? false : true}
                  type="submit"
                  // onClick={}
                  // disabled={radio ? false : true}
                />

                <Link class="auth-bottom-mesages" to="/login">
                  Didn't receive the code? <span>Resend</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <AuthFooter />
    </React.Fragment>
  );
};

export default ForgotPasswordMailVerification;
