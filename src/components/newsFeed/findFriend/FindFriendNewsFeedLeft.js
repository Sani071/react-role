import React from "react";
import Plus from "../../../assets/images/home/plus.png";
const FindFriendNewsFeedLeft = () => {
  return (
    <div className="newsfeed-left-inner">
      <ul className="news-left-list">
        <li>
          <div className="new-left-left">
            {/* <img src={Job} alt="" /> Events */}
          </div>

          <div className="new-left-right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </li>
      </ul>
      <a href="" className="default-btn">
        {" "}
        <img src={Plus} alt="Plus" /> Create Post{" "}
      </a>
    </div>
  );
};

export default FindFriendNewsFeedLeft;
