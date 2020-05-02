import React, { useState, useEffect } from "react";
import Authnav from "../common/AuthNav";
import Button from "../common/Button";
import AuthFooter from "../common/AuthFooter";
import { MDBInput } from "mdbreact";
import Input from "../common/Input";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { createForgotPasswordToken } from "../../store/actions/userAction";
import { Spinner } from "reactstrap";
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
const ForgotPassword = ({ history }) => {
  const [radio, setRadio] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const user = useSelector(state => state.forgotUser.forgotUser);
  const isLoading = useSelector(
    state => state.meta.isLoading.resetPasswordToken
  );
  const dispatch = useDispatch();
  const isForgotUserAuthenticated = useSelector(
    state => state.forgotUser.isForgotUserAuthenticated
  );
  if (!isForgotUserAuthenticated) {
    history.push("/forgot_account");
  }
  const onClick = val => {
    setRadio(val);
  };
  let userEmail = user.email;
  let userPhone = user.phone;
  const continueHandler = e => {
    e.preventDefault();
    if (radio === 1) {
      if (email !== userEmail) {
        setEmailError("Email didn't match");
        return;
      }
      let data = {
        email,
        identityType: "email"
      };
      dispatch(createForgotPasswordToken(data, history));
    }
    if (radio === 2) {
      let phoneNumber = parsePhoneNumberFromString(userPhone);
      phoneNumber = phoneNumber.formatNational();
      phoneNumber = phoneNumber.replace("-", "");
      if (number !== phoneNumber) {
        setNumberError("Number didn't match");
        return;
      }
      let dataS = {
        phone: userPhone,
        identityType: "phone"
      };
      dispatch(createForgotPasswordToken(dataS, history));
      // history.push("/forgot_password_phone_verification");
      // Axios.get("https://ipapi.co/json/")
      //   .then(async response => {
      //     let data = response.data;
      //     let countryCode = data.country_code;
      //     const phoneNumber = parsePhoneNumberFromString(number, countryCode);
      //     let newNumber = phoneNumber.number;
      //     if (userPhone !== newNumber) {
      //
      //       return;
      //     }
      //     let dataS = {
      //       phone:newNumber,
      //       identityType:'phone'
      //     }
      //     dispatch(createForgotPasswordToken(dataS, history))
      //     // history.push("/forgot_password_phone_verification");
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
      //
    }
  };
  let buttonCheck = false;
  if (radio) {
    if (email || number) {
      buttonCheck = true;
    }
  }
  const handleFocus = event => event.target.select();

  useEffect(() => {
    if (!user.email || !user.phone) {
      if (user.email) {
        onClick(1);
      }
      if (user.phone) {
        onClick(2);
      }
    }
  }, [user]);
  let mail = user.email;
  let phone = user.phone;
  let hideEmail = "";
  let hidePhone = "";

  if (mail) {
    let lastText = mail.split("@")[1];
    let firstTextArea = mail.split("@")[0];
    var lastChar = firstTextArea.substr(firstTextArea.length - 1); // => "1"
    let firstText = mail.charAt(0);
    hideEmail = firstText + "*********" + lastChar + "@" + lastText;
  }
  if (phone) {
    hidePhone = "*********" + phone.substr(phone.length - 2);
  }
  let checkUserMultiple = false;
  if (userEmail && userPhone) {
    checkUserMultiple = true;
  }
  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area forgot-password-auth">
        <div className="roy-container">
          <div className="auth-form-main-area">
            <div className="afa-header">
              <h3>How do you want to recover your password?</h3>
              <p className="f-16">
                We found the following information associated with your account.
                {/* {hideEmail}
                {hidePhone} */}
              </p>
            </div>
            <form onSubmit={continueHandler}>
              <div className="auth-form-area">
                {!checkUserMultiple && user.email && (
                  <React.Fragment>
                    <MDBInput
                      onClick={() => onClick(1)}
                      checked={radio === 1 ? true : false}
                      label="By Email"
                      type="radio"
                      id="radio1"
                    />

                    {radio === 1 && (
                      <div className="recovery-email-form-area">
                        <span>Send recovery code to {hideEmail}</span>
                        <Input
                          placeholder="Enter your email address"
                          onFocus={handleFocus}
                          error={emailError ? emailError : null}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                    )}
                  </React.Fragment>
                )}

                {!checkUserMultiple && user.phone && (
                  <React.Fragment>
                    <MDBInput
                      onClick={() => onClick(2)}
                      checked={radio === 2 ? true : false}
                      label="By Phone"
                      type="radio"
                      id="radio2"
                    />
                    {radio === 2 && (
                      <div className="recovery-email-form-area">
                        <span>
                          Send recovery code to this phone {hidePhone}
                        </span>
                        <Input
                          placeholder={
                            "Enter your phone ending with " + hidePhone
                          }
                          onChange={e => setNumber(e.target.value)}
                          type="number"
                          error={numberError ? numberError : null}
                        />
                      </div>
                    )}
                  </React.Fragment>
                )}

                {user.email && user.phone && (
                  <React.Fragment>
                    <MDBInput
                      onClick={() => onClick(1)}
                      checked={radio === 1 ? true : false}
                      label="By Email"
                      type="radio"
                      id="radio1"
                    />

                    {radio === 1 && (
                      <div className="recovery-email-form-area">
                        <span>Send recovery code to{hideEmail}</span>
                        <Input
                          placeholder="Enter your email address"
                          onFocus={handleFocus}
                          error={emailError ? emailError : null}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                    )}

                    {/* //   )} */}

                    <MDBInput
                      onClick={() => onClick(2)}
                      checked={radio === 2 ? true : false}
                      label="By Phone"
                      type="radio"
                      id="radio2"
                    />
                    {radio === 2 && (
                      <div className="recovery-email-form-area">
                        <span>
                          Send recovery code to this phone {hidePhone}
                        </span>
                        <Input
                          placeholder={
                            "Enter your phone ending with " + hidePhone
                          }
                          onChange={e => setNumber(e.target.value)}
                          type="number"
                          error={numberError ? numberError : null}
                        />
                      </div>
                    )}
                  </React.Fragment>
                )}

                <Button
                  classNames={["display-un-block", "continue-btn"]}
                  type="submit"
                  text={isLoading ? <Spinner /> : "Continue"}
                  disabled={buttonCheck ? false : true}
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

export default ForgotPassword;
