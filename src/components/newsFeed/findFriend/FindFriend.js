import React from "react";
import FindFriendNewsFeedLeft from "./FindFriendNewsFeedLeft";
import FindFriendNewsFeedRight from "./FindFriendNewsFeedRight";
import FindFriendNewsFeedMiddle from "./FindFriendNewsFeedMiddle";
import { useDispatch, useSelector } from "react-redux";
export default function FindFriend() {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isUserAuthenticated);
  if (!isAuthenticated) {
    return <h2>loading</h2>;
  }
  return (
    <main className="newsfeed-main">
      <div className="newsfeed-container">
        <div className="newsfeed-row">
          <div className="newsfeed-left">
            <FindFriendNewsFeedLeft />
          </div>
          <div className="newsfeed-middle">
            <FindFriendNewsFeedMiddle />
          </div>
          <div className="newsfeed-right">
            <FindFriendNewsFeedRight />
          </div>
        </div>
      </div>
    </main>
  );
}
