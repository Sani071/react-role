import React, { useState } from "react";
import Authnav from "../common/AuthNav";
import IdentityUserPic from "../../assets/images/profile/profile.png";
import AuthFooter from "../common/AuthFooter";
import { useDispatch, useSelector } from "react-redux";
import { meHandlerAction } from "../../store/actions/user/userProfile";
import Button from "../common/Button";
const ForgotUserProfiles = ({ history }) => {
  const [email, setEmail] = useState("");
  const users = useSelector(state => state.forgotUser.forgotUsers);
  const isForgotUsersAuthenticated = useSelector(
    state => state.forgotUser.isForgotUsersAuthenticated
  );
  const backHandler = () => {
    history.goBack();
  };
  const nextHandler = () => {
    history.push("/forgot_user_profile_next");
  };
  const dispatch = useDispatch();
  const meHandler = val => {
    dispatch(meHandlerAction(val, history));
  };
  if (!isForgotUsersAuthenticated) {
    backHandler();
  }
  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area">
        <div className="roy-container text-center forgot-user-profile">
          <div className="auth-form-main-area">
            <div className="afa-header">
              <h3>Identify your account</h3>
            </div>
            <div className="identity-profile-area-main">
              <h6>Your search results.</h6>
              <ul className="identity-user-lists">
                {users &&
                  users.map((us, i) => {
                    return (
                      <li key={i}>
                        <div className="iul-left">
                          <img
                            src={us.photo ? us.photo : IdentityUserPic}
                            alt="IdentityUserPic"
                          />
                          <h6>{us.name}</h6>
                        </div>
                        <div
                          className="iul-right"
                          onClick={() => meHandler(us)}
                        >
                          <h5>This is Me</h5>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="afa-bottom">
              <Button
                text="Back"
                classNames={["back-btn"]}
                onClick={backHandler}
              />
            </div>
          </div>
        </div>
      </main>

      <AuthFooter />
    </React.Fragment>
  );
};

export default ForgotUserProfiles;
