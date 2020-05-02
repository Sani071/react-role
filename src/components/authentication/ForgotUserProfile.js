import React from "react";
import Authnav from "../common/AuthNav";
// import Input from "../common/Input";
import Button from "../common/Button";
// import { Link } from "react-router-dom";
// import Select from "../common/Select";
import AuthFooter from "../common/AuthFooter";
import UserProfile from "../../assets/images/profile/profile.png";
import {useSelector} from "react-redux"
import Spinner from "../common/Spinner";
const ForgotUserProfile = ({ history }) => {
  // const [email, setEmail] = useState("");
  const user = useSelector(state => state.forgotUser.forgotUser)
  const isForgotUserAuthenticated = useSelector(state => state.forgotUser.isForgotUserAuthenticated)
  const backHandler = () => {
    history.goBack();
  };
  const nextHandler = () => {
    history.push("/forgot_user_profile_next");
  };
  if(!isForgotUserAuthenticated){
    backHandler()
  }
  return (
    <React.Fragment>
      <Authnav />
      <main className="auth-main-area">
        <div className="roy-container text-center forgot-user-profile">
          <div className="auth-form-main-area">
            <div className="afa-header">
              <h3>This ID is matching with your information </h3>
            </div>
            <img src={user.photo ? user.photo : UserProfile} alt="UserProfile" />
            <h4>{user.name}</h4>
            <p className="f-16">Is this you?</p>
            <div className="forgot-auth-button">
              <Button
                text="Not Me"
                classNames={["border-btn", "blue-btn"]}
                type="button"
                onClick={backHandler}
              />
              <Button
                text="This is Me"
                classNames={["blue-bg-btn"]}
                type="button"
                onClick={nextHandler}
              />
            </div>
          </div>
        </div>
      </main>

      <AuthFooter />
    </React.Fragment>
  );
};

export default ForgotUserProfile;
