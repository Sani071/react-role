import React, {useState} from "react";
import Logo from "../../assets/images/logo/light.png";
import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
import {loginAction} from "../../store/actions/userAction"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../common/Spinner"
import {withRouter} from "react-router-dom"


const LandNav = ({history}) => {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [passwordIcon, setPasswordIcon] = useState(true);
  const passShowHandler = () => {
    var x = document.getElementById("land-login-id");
    setPasswordIcon(!passwordIcon)
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
  const dispatch = useDispatch()
  const loading = useSelector(state => state.meta.isLoading)
  const submitHandler = async e => {
      e.preventDefault()
      let userData = {
          email,
          password
      }
      dispatch(loginAction(userData, history))
  }
  return (
    <React.Fragment>
      <header className="header-news land-nav">
      <form onSubmit={submitHandler}>
        <div className="header-container">
          <div className="header-con-inner">
            <div className="header-top-left">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
           
            <div className="header-top-right landing">
              <div className="landing-login-form-area">
                <div className="llfa-left">
                  <div className="llfa-left-top">
                    <Input
                      label="Email or Phone"
                      classNames={["green-bg-input"]}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                      label="Password"
                      classNames={["green-bg-input"]}
                      type="password"
                      id="land-login-id"
                      onChange={(e) => setPassword(e.target.value)}
                      rightIcon={passwordIcon ? "fas fa-eye-slash" : "far fa-eye"} 
                                passShowHandler={passShowHandler}
                    />
                  </div>
                  <div className="llfa-right-bottom">
                    <Link to="/forgot_account">Forgot your account or password?</Link>
                  </div>
                </div>
                <div className={["llfa-right", loading ? 'llfa-loading' : null].join(" ")}>
                  <Button  text={loading ? <Spinner></Spinner> : <span>Log in</span>} type="submit" />
                </div>
              </div>
            </div>

           
           



          </div>
        </div>
        </form>
      </header>
    </React.Fragment>
  );
};

export default withRouter(LandNav);
