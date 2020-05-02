import React, { useState } from "react";
import NewsFeedNav from "../common/NewsFeedNav";
import NewsFeedMain from "./NewsFeedMain";
import FindFriend from "./findFriend/FindFriend";
import { Route } from "react-router-dom";
import RequestedFriend from "../newsFeed/findFriend/RequestedFriend";
import { useDispatch, useSelector } from "react-redux";

export default function publicNewsFeed() {
  return (
    <div>
      <NewsFeedNav />
      <Route exact path="/newsfeed" component={NewsFeedMain} />
      <Route exact path="/newsfeed/find_friend" component={FindFriend} />
      <Route
        exact
        path="/newsfeed/requested_friend"
        component={RequestedFriend}
      />
      {/* <NewsFeedMain /> */}
    </div>
  );
}

// export default publicNewsFeed;
