import React, { useState } from "react";
import User from "../../assets/images/home/profile.png";
import Full from "../../assets/images/home/fullwidth.png";
import Chat from "../../assets/images/home/chatdown.png";
import Max from "../../assets/images/home/maximize.png";
import ProfileThumb from "../common/ProfileThumb";
import ContactItem from "../common/ContactItem";
const NewsFeedRightContent = () => {
  const [items, setItems] = useState([{}, {}, {}]);
  const [users, setUsers] = useState([{}, {}, {}, {}]);
  return (
    <div>
      <div className="nfr-top">
        <div className="nfr-top-header">
          <h6>SUGGESTION</h6>
          <i class="fas fa-ellipsis-v"></i>
        </div>
        <div className="nfr-top-wrapper">
          <ul className="contact-lists">
            {items &&
              items.map(it => {
                return (
                  <li>
                    <div className="cl-thumb">
                      <img src={User} alt="User" />
                    </div>
                    <div className="cl-content">
                      <h6>Mithila Zein </h6>
                      <span>15 Mutual Connections</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="nfr-top-bottom">
          <a href="" className="explore-btn">
            Explore More{" "}
          </a>
        </div>
      </div>
      <div className="nfr-bottom">
        <div className="nfr-bottom-header">
          <div className="nfr-b-h-left">
            <i class="far fa-comment"></i> Messages (7){" "}
            <i class="fas fa-caret-down"></i>
          </div>
          <div className="nfr-b-h-right">
            <img src={Full} alt="" />
            <img src={Chat} alt="" />
            <img src={Max} alt="" />
          </div>
        </div>
        <div className="nfr-bottom-header-two">
          <div className="nfrbht-left">
            <ProfileThumb />
            <p className="f-14">Soumitro Sobuj</p>
          </div>
          <div className="nfrbht-right">
            <i class="fas fa-search"></i>
            <i class="fas fa-bars"></i>
          </div>
        </div>
        <div className="nfr-wrapper-top">
          <div className="nfr-connection-area">
            <div className="nfr-connection-left">
              <p>
                All Connections <i class="fas fa-caret-down"></i>
              </p>
            </div>
            <div className="nfr-connection-right">
              <p>
                Active(1253)
                <span className="nfrcr-span">
                  <span></span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="nfr-wrapper-area">
          {users &&
            users.map(us => {
              return <ContactItem />;
            })}
        </div>
      </div>
    </div>
  );
};

export default NewsFeedRightContent;
