import React, { useState } from "react";
import FindFriendNewsFeedLeft from "./FindFriendNewsFeedLeft";
import FindFriendNewsFeedRight from "./FindFriendNewsFeedRight";
import RequestFriendNewsFeedMiddle from "./RequestFriendNewsFeedMiddle";
import { useDispatch, useSelector } from "react-redux";
import RequestSendFriendNewsFeedMiddle from "./RequestSendFriendNewsFeedMiddle";
export default function RequestedFriend() {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isUserAuthenticated);

  const [itemActive, setItemActive] = useState(1);
  if (!isAuthenticated) {
    return <h2>loading</h2>;
  }
  const itemActiveHander = val => {
    setItemActive(val);
  };
  return (
    <main className="newsfeed-main">
      <div className="newsfeed-container">
        <div className="newsfeed-row">
          <div className="newsfeed-left">
            <FindFriendNewsFeedLeft />
          </div>
          <div className="newsfeed-middle">
            <ul className="friend-request-types-list">
              <li
                className={itemActive === 1 ? "active" : null}
                onClick={() => itemActiveHander(1)}
              >
                Received Request
              </li>
              <li
                className={itemActive === 2 ? "active" : null}
                onClick={() => itemActiveHander(2)}
              >
                Sent Request
              </li>
              <li
                className={itemActive === 3 ? "active" : null}
                onClick={() => itemActiveHander(3)}
              >
                Suggested Friend
              </li>
            </ul>
            {itemActive === 1 && <RequestFriendNewsFeedMiddle />}
            {itemActive === 2 && <RequestSendFriendNewsFeedMiddle />}
          </div>
          <div className="newsfeed-right">
            <FindFriendNewsFeedRight />
          </div>
        </div>
      </div>
    </main>
  );
}
