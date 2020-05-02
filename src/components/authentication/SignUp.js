import React, { useState } from "react";
import Authnav from "../common/AuthNav";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";
// import Select from "../common/Select";
import AuthFooter from "../common/AuthFooter";
import EmailPhone from "../../assets/images/landing/Group.png";
// import Axios from "axios";
import { signUpAction } from "../../store/actions/userAction";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { parsePhoneNumberFromString } from "libphonenumber-js";
// import { setError } from "../../store/actions/errorAction";
import Spinner from "../common/Spinner";
const SignUp = ({ history }) => {
  //   let [passShow, setPassShow] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [emailError, setEmailError] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [passwordIcon, setPasswordIcon] = useState(true);
  let [confirmPasswordIcon, setConfirmPasswordIcon] = useState(true);

  //   const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const error = useSelector(state => state.error.signUpError);
  const loading = useSelector(state => state.meta.isLoading);

  const passShowHandler = () => {
    var x = document.getElementById("signup-id");
    setPasswordIcon(!passwordIcon);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const passConfirmShowHandler = () => {
    var x = document.getElementById("signup-id-confirm");
    setConfirmPasswordIcon(!confirmPasswordIcon);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const submitHandler = async e => {
    e.preventDefault();

    let userData = {
      name,
      email: email,
      password,
      confirmPassword,
      agree: true
    };
    dispatch(signUpAction(userData, history));
  };

  if (emailError) {
    let error = {
      email: emailError
    };
    error = error;
    // setError(error)
  }
  console.log(loading);
  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area">
        <div className="roy-container">
          <div className="auth-form-main-area">
            <div className="afa-header">
              <h3>Create Your New Account</h3>
              <p className="f-16">It’s simple and fast </p>
            </div>
            <div className="auth-form-area">
              <form onSubmit={submitHandler}>
                <Input
                  leftIcon="fas fa-user-alt"
                  placeholder="Full name"
                  error={error ? error.name : null}
                  onChange={e => setName(e.target.value)}
                />

                <Input
                  leftIcon="fas fa-envelope"
                  leftImage={EmailPhone}
                  placeholder="Email or Phone"
                  // type="email"
                  error={error ? error.email : null}
                  onChange={e => setEmail(e.target.value)}
                />
                {/* <Select 
                    leftIcon="fas fa-briefcase"
                    placeholder="What's your occupation?"
                    /> */}
                <Input
                  leftIcon="fas fa-lock"
                  type="password"
                  id="signup-id"
                  placeholder="Create password"
                  // rightIcon="fas fa-eye-slash"
                  rightIcon={passwordIcon ? "fas fa-eye-slash" : "far fa-eye"}
                  passShowHandler={passShowHandler}
                  error={error ? error.password : null}
                  onChange={e => setPassword(e.target.value)}
                />
                <Input
                  leftIcon="fas fa-lock"
                  type="password"
                  id="signup-id-confirm"
                  // rightIcon="fas fa-eye-slash"
                  rightIcon={
                    confirmPasswordIcon ? "fas fa-eye-slash" : "far fa-eye"
                  }
                  placeholder="Confirm password"
                  passShowHandler={passConfirmShowHandler}
                  error={error ? error.confirmPassword : null}
                  onChange={e => setConfirmPassword(e.target.value)}
                />

                <p className="sign-up-terms">
                  {/* By clicking Create Account, you agree to our{" "}
                  <span> Terms, Data Policy </span> and{" "}
                  <span>Cookie Policy.</span> You may receive SMS notifications
                  from us and can opt out at any time. */}
                  By clicking Create Account, you agree to our Terms of Service,
                  Privacy Policy, Data Policy & Cookie Policy.
                </p>
                <Button
                  text={loading ? <Spinner></Spinner> : "Create Account"}
                  type="submit"
                />
              </form>

              <Link to="/login" className="auth-bottom-mesages">
                Already have an account? <span>LOG IN</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <AuthFooter />
    </React.Fragment>
  );
};

export default SignUp;
