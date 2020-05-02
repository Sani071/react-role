import React from "react";
import Job from "../../assets/images/home/job.png";
import Lost from "../../assets/images/home/lost&found.png";
import Page from "../../assets/images/home/page.png";
import People from "../../assets/images/home/people.png";
import Read from "../../assets/images/home/read.png";
import Union from "../../assets/images/home/Union.png";
import Vec from "../../assets/images/home/Vector.png";
import VecSitting from "../../assets/images/home/Vector-sitting.png";
import Plus from "../../assets/images/home/plus.png";
const NewsFeedLeft = () => {
  return (
    <div className="newsfeed-left-inner">
      <ul className="news-left-list">
        <li>
          <div className="new-left-left">
            <img src={Job} alt="" /> Events
          </div>

          <div className="new-left-right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <div className="new-left-left">
            <img src={Lost} alt="" /> Lost & Found
          </div>

          <div className="new-left-right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <div className="new-left-left">
            <img src={Page} alt="" /> Jobs
          </div>

          <div className="new-left-right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <div className="new-left-left">
            <img src={Page} alt="" /> Pages
          </div>

          <div className="new-left-right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <div className="new-left-left">
            <img src={People} alt="" /> Groups
          </div>

          <div className="new-left-right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <div className="new-left-left">
            <img src={Read} alt="" /> Read
          </div>

          <div className="new-left-right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <div className="new-left-left">
            <img src={Union} alt="" /> Emergencies
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

export default NewsFeedLeft;
