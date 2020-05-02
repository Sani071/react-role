import React from "react";
import { Route } from "react-router-dom";
import NewsFeed from "../components/newsFeed/publicNewsFeed";
import SignUp from "../components/authentication/SignUp";
import Login from "../components/authentication/Login";
import Landing from "../components/landing/Landing";
import Forgot from "../components/authentication/Forgot";
import ForgotUserProfile from "../components/authentication/ForgotUserProfile";
import ForgotUserProfileNext from "../components/authentication/ForgotUserProfileNext";
import ForgotPassword from "../components/authentication/ForgotPassword";
import ForgotPasswordMailVerification from "../components/authentication/ForgotPasswordMailVerification";
import ForgotPasswordPhoneVerification from "../components/authentication/ForgotPasswordPhoneVerification";
import ResetForgotPassword from "../components/authentication/ResetForgotPassword";
import ConfirmAccount from "../components/authentication/ConfirmAccount";
import AccountActive from "../components/authentication/AccountActive";
import ConfirmAccountPhone from "../components/authentication/ConfirmAccountPhone";
import Profile from "../components/profile/Profile";
import ForgotUserProfiles from "../components/authentication/ForgotUserProfiles";
// import ForgotPasswordPhoneVerification from "../components/authentication/ForgotPasswordPhoneVerification"
import {
  UserPrivateRoute,
  UserRoute
} from "../components/privateRoute/userPrivateRoute";
export default function View() {
  return (
    <div>
      <UserPrivateRoute path="/newsfeed" component={NewsFeed} />
      <UserPrivateRoute path="/profile" component={Profile} />
      <UserRoute path="/create_an_account" component={SignUp} />
      <UserRoute path="/login" component={Login} />
      <UserRoute exact path="/" component={Landing} />
      <Route exact path="/forgot_account" component={Forgot} />
      <Route exact path="/forgot_user_profile" component={ForgotUserProfile} />
      <Route
        exact
        path="/forgot_user_profiles"
        component={ForgotUserProfiles}
      />
      <Route
        exact
        path="/forgot_user_profile_next"
        component={ForgotUserProfileNext}
      />
      <Route exact path="/forgot_password" component={ForgotPassword} />
      <Route
        exact
        path="/forgot_password_mail_verification"
        component={ForgotPasswordMailVerification}
      />
      <Route
        exact
        path="/forgot_password_phone_verification"
        component={ForgotPasswordPhoneVerification}
      />
      <Route
        exact
        path="/user/reset_password/:token"
        component={ResetForgotPassword}
      />
      <Route exact path="/confirm_account" component={ConfirmAccount} />
      <Route
        exact
        path="/confirm_account_phone"
        component={ConfirmAccountPhone}
      />
      <Route exact path="/user/active-account/:id" component={AccountActive} />
    </div>
  );
}
