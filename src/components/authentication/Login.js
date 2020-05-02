import React, { useState } from "react";
import Authnav from "../common/AuthNav";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import Select from "../common/Select";
import AuthFooter from "../common/AuthFooter";
import EmailPhone from "../../assets/images/landing/Group.png";
import { loginAction } from "../../store/actions/userAction";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { MDBAlert } from "mdbreact";
import Axios from "axios";
import Spinner from "../common/Spinner";
const Login = ({ history }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordIcon, setPasswordIcon] = useState(true);
  // let [password, setPassword] = useState("");
  const passShowHandler = () => {
    var x = document.getElementById("login-id");
    setPasswordIcon(!passwordIcon)

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const dispatch = useDispatch();
  const error = useSelector(state => state.error.login);
  const message = useSelector(state => state.error.loginMessage);
  const loading = useSelector(state => state.meta.isLoading);
  const submitHandler = async e => {
    e.preventDefault();
    let userData = {
      email,
      password
    };
    dispatch(loginAction(userData, history));
  };
  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area">
        <div className="roy-container">
          <div className="auth-form-main-area">
            <div className="afa-header">
              <h3>Login to your account</h3>
            </div>

            
            <div className="auth-form-area">
              {message && <MDBAlert color="danger">{message}</MDBAlert>}
              <form onSubmit={submitHandler}>
              <Input
                leftIcon="fas fa-envelope"
                leftImage={EmailPhone}
                placeholder="Email or Phone"
                error={error ? error.email : null}
                onChange={e => setEmail(e.target.value)}
              />

              <Input
                leftIcon="fas fa-lock"
                type="password"
                id="login-id"
                placeholder="Password"
                rightIcon={passwordIcon ? "fas fa-eye-slash" : "far fa-eye"} 
                passShowHandler={passShowHandler}
                error={error ? error.password : null}
                onChange={e => setPassword(e.target.value)}
              />
              <Button
                text={loading ? <Spinner></Spinner> : "Login"}
                type="submit"
                // onClick={submitHandler}
              />
                </form>
              

              <div className="text-right">
                <Link to="/forgot_account" className="auth-forgot-mesages">
                  Forgot your account or password?
                </Link>
              </div>

              <Link to="/create_an_account" className="auth-bottom-mesages">
                Don’t have an account? <span>Create New Account</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <AuthFooter />
    </React.Fragment>
  );
};

export default Login;
