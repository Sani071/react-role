import React from "react";
import NewsFeedLeft from "./NewsFeedLeft";
import NewsFeedRight from "./NewsFeedRight";
import NewsFeedMiddle from "./NewsFeedMiddle";
import { useDispatch, useSelector } from "react-redux";

export default function NewsFeedMain() {
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
            <NewsFeedLeft />
          </div>
          <div className="newsfeed-middle">
            <NewsFeedMiddle />
          </div>
          <div className="newsfeed-right">
            <NewsFeedRight />
          </div>
        </div>
      </div>
    </main>
  );
}
