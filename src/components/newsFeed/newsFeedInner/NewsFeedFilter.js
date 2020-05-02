import React from "react";
import AllPost from "../../../assets/images/newsfeed/feedfilter/allpost 01.png";
import Group from "../../../assets/images/newsfeed/feedfilter/Group.png";
import Quate from "../../../assets/images/newsfeed/feedfilter/quate.png";
import Photo from "../../../assets/images/newsfeed/feedfilter/image.png";
import Audio from "../../../assets/images/newsfeed/feedfilter/audio.png";
import Video from "../../../assets/images/newsfeed/feedfilter/video.png";
import GoLive from "../../../assets/images/newsfeed/feedfilter/goLive.png";
import Compass from "../../../assets/images/newsfeed/feedfilter/compass.png";
import LeftImage from "../../../assets/images/newsfeed/feedfilter/left.png";
const NewsFeedFilter = () => {
  return (
    <div className="news-feed-filter">
      <div className="news-feed-filter-top">
        <ul className="nfft-list">
          <li>
            {" "}
            <img src={AllPost} alt="AllPost" /> All
          </li>
          <li>
            {" "}
            <img src={Group} alt="Group" /> Post{" "}
          </li>
          <li>
            {" "}
            <img src={Quate} alt="GoLive" /> Quote{" "}
          </li>
          <li>
            {" "}
            <img src={Photo} alt="GoLive" /> Photo{" "}
          </li>
          <li>
            {" "}
            <img src={Audio} alt="GoLive" /> Audio{" "}
          </li>
          <li>
            {" "}
            <img src={Video} alt="GoLive" /> Video{" "}
          </li>
          <li>
            {" "}
            <img src={GoLive} alt="GoLive" /> Live{" "}
          </li>
        </ul>
      </div>
      <div className="news-feed-filter-bottom">
        {/* <div className="nffb-left">
          <img src={Compass} alt="Compass" />
          <p>Worldwide</p>
          <i className="fas fa-sort-down"></i>
        </div> */}

        <div className="nffb-right pointer">
          <img src={LeftImage} alt="LeftImage" />
          <p>All Time</p>
          <i className="fas fa-sort-down"></i>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedFilter;
