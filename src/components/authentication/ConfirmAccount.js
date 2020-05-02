import React, { useState } from "react";
import Authnav from "../common/AuthNav";
import Button from "../common/Button";
import AuthFooter from "../common/AuthFooter";
// import { MDBInput } from "mdbreact";
import Input from "../common/Input";
import { Link } from "react-router-dom";
// import Check from "../../assets/images/landing/check (9) 1.png";
import { activeAccountWithOtp } from "../../store/actions/userAction";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MDBAlert } from "mdbreact";
const ConfirmAccount = ({ history }) => {
  const [number, setNumber] = useState("");
  const [load, setLoad] = useState("");
  const [messages, setMessages] = useState("");

  const dispatch = useDispatch();
  const message = useSelector(state => state.error.userActiveAccountOtpMessage);

  const continueHandler = () => {
    let data = {
      type: "email",
      email: localStorage.getItem("acc_create_email"),
      otp: number
    };
    dispatch(activeAccountWithOtp(data, history));
  };
  const resendHandler = async e => {
    e.preventDefault();
    setLoad(true);
    let data = {
      email: localStorage.getItem("acc_create_email")
    };
    try {
      await Axios.post("/user/activateAccountResend", data);
      setLoad(false);
      setMessages("We've sent you another Code.");
      
    } catch (err) {
      if (!err.response) {
        history.push("/server-error");
        return;
      }
      setLoad(false);
    }
  };
  if(load){
    
  }
  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area forgot-password-auth verification">
        <div className="roy-container">
          <div className="auth-form-main-area confirm-account-area">
            <div
              className={["afa-header", message ? "unverified" : null].join(
                " "
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M32 64C14.3545 64 0 49.6455 0 32C0 14.3545 14.3545 0 32 0C49.6455 0 64 14.3545 64 32C64 49.6455 49.6455 64 32 64ZM32 4C16.5601 4 4 16.5601 4 32C4 47.4399 16.5601 60 32 60C47.4399 60 60 47.4399 60 32C60 16.5601 47.4399 4 32 4Z"
                  fill="#19D49C"
                />
                <path
                  d="M29.002 42.667C28.4897 42.667 27.978 42.4727 27.5884 42.0806L18.9219 33.4141C18.1406 32.6323 18.1406 31.3657 18.9219 30.5845C19.7031 29.8032 20.9697 29.8032 21.7515 30.5845L29.0044 37.8379L44.9248 21.918C45.7061 21.1367 46.9727 21.1367 47.7539 21.918C48.5352 22.6992 48.5352 23.9658 47.7539 24.7471L30.4204 42.0806C30.0259 42.4727 29.5142 42.667 29.002 42.667Z"
                  fill="#19D49C"
                />
              </svg>
              {message && <MDBAlert color="danger">{message}</MDBAlert>}
              {message && <h3>Sorry! Please enter your code correctly</h3>}
              {!message && (
                <h3>
                  Thanks! your account has been created successfully. Please
                  verify now!
                </h3>
              )}

              <p className="f-16">
                We have just sent you a verification code with a link to this
                email <span> {localStorage.getItem("acc_create_email")} </span>{" "}
                Please enter the code below or click on the link that we’ve just
                sent. If you don't see our email in your inbox, please check
                your spam folder.
              </p>
              {messages && (
                <p className="success-text mb-4">
                  {" "}
                  <i class="far fa-check-circle"></i> {messages}
                </p>
              )}
            </div>
            <div className="auth-form-area">
              <Input type="number" onChange={e => setNumber(e.target.value)} />

              <Button
                text="Submit"
                classNames={["display-un-block"]}
                disabled={number ? false : true}
                type="button"
                onClick={continueHandler}
                // disabled={radio ? false : true}
              />
              <div className="auth-bottom-mesages-p">
                <p>  Didn't receive the code?</p>
            
              <Link
                class="auth-bottom-mesages"
                to="#"
                onClick={resendHandler}
              >
                 <span  >Resend</span>
              </Link>
              </div>
              
            </div>
          </div>
        </div>
      </main>

      <AuthFooter />
    </React.Fragment>
  );
};

export default ConfirmAccount;
