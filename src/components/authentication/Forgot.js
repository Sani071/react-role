import React, { useState } from "react";
import Authnav from "../common/AuthNav";
import Input from "../common/Input";
import Button from "../common/Button";
import AuthFooter from "../common/AuthFooter";
import EmailPhone from "../../assets/images/landing/Group.png";
import { userFindAccount } from "../../store/actions/user/userProfile";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
const Forgot = ({ history }) => {
  const [identity, setIdentiy] = useState("");
  const backHandler = () => {
    history.goBack();
  };
  const dispatch = useDispatch();
  const error = useSelector(state => state.error.userFindAccountError);
  const loading = useSelector(state => state.meta.isLoading.userFindAccount);

  const nextHandler = e => {
    e.preventDefault();
    let data = {
      identity
    };
    dispatch(userFindAccount(data, history));

    // history.push("/forgot_user_profile");
  };
  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area">
        <div className="roy-container">
          <div className="auth-form-main-area">
            <div className="afa-header">
              <h3>Forgot your account or password? </h3>
              <p className="f-16">
                Enter your Email or Phone or Profile Name to find your account.
              </p>
            </div>
            <form onSubmit={nextHandler}>
              <div className="auth-form-area">
                <Input
                  leftIcon="fas fa-envelope"
                  placeholder="Email or Phone or Profile Name"
                  value={identity}
                  onChange={e => setIdentiy(e.target.value)}
                  leftImage={EmailPhone}
                  error={error ? error.identity : null}
                />
                <div className="forgot-auth-button">
                  <Button
                    text="Cancel"
                    classNames={["border-btn", "blue-btn"]}
                    type="button"
                    onClick={backHandler}
                  />
                  <Button
                    text={loading ? <Spinner /> : "Find Account"}
                    classNames={["blue-bg-btn", "find-account"]}
                    type="submit"
                    // onClick={nextHandler}
                    disabled={identity ? false : true}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <AuthFooter />
    </React.Fragment>
  );
};

export default Forgot;
