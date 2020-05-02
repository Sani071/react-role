import React from "react";
import NewsFeedNav from "../common/NewsFeedNav";
import ProfileMain from "./ProfileMain";
import { useSelector } from "react-redux";

export default function Profile() {
  // const user = useSelector(state => state.auth.user)
  const isAuthenticated = useSelector(state => state.auth.isUserAuthenticated);
  if (!isAuthenticated) {
    return <h2>loading</h2>;
  }
  return (
    <React.Fragment>
      <NewsFeedNav navTwo={true} />
      <ProfileMain />
    </React.Fragment>
  );
}
