import React, { useState, useEffect } from "react";
import PeopleImage from "../../../assets/images/newsfeed/image 20.png";
import GoLiveImage from "../../../assets/images/newsfeed/goLive.png";
import Main from "./statusBox/main";
const PostFormArea = ({ liveToggle }) => {
  const [modal, setModal] = useState(!false)
  const modalHandler = (e) => {
    setModal(!modal);
  }

  const initModalHandler = (e) => {
    if (!modal) {
      e.preventDefault()

      setModal(!modal)
    }
  }

  useEffect(() => {
    const body = document.getElementById("mainbody");
    // const scroll = document.getElementsByClassName("hideScroll");
    if (modal) {
      body.style.overflow = "hidden"
      // body.style.paddingLeft="205px"
      // body.classList.add("hideScroll");
      // document.addEventListener("wheel", function (e) { e.preventDefault(); }, { passive: false });
    } else {
      body.style.overflow = "scroll"
    }
  }, [modal]);

  return (
    <div>
      <div className="post-form-area">
        <div className="post-from-person">
          <img src={ PeopleImage } className="b-r" alt="PeopleImage" />
        </div>
        <div onClick={ (e) => initModalHandler(e) } className="post-form-text">
          <p className="f-16">Have any update, Mohammod?</p>
        </div>
        <div className="go-live-btn" onClick={ liveToggle }>
          <p className="p-12"> Go Live </p>
          <img src={ GoLiveImage } alt="GoLiveImage" />
        </div>
      </div>
      <Main modal={ modal } toggle={ modalHandler } />
    </div>
  );
};

export default PostFormArea;
