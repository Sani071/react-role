import React from "react";
import LiveGo from "../../../assets/images/newsfeed/live/liveLive.png";
import ShareScreen from "../../../assets/images/newsfeed/live/shareScreen.png";
import Game from "../../../assets/images/newsfeed/live/liveGame.png";
import Close from "../../../assets/images/newsfeed/live/close.png";
const LiveMainArea = ({ liveToggle, live }) => {
  return (
    <div className={["live-main-area", live ? "show" : null].join(" ")}>
      <div className="live-main-content">
        <ul className="lmc-list">
          <li className="red-bg">
            {" "}
            <img src={LiveGo} alt="LiveGo" /> Live Me{" "}
          </li>
          <li className="blue-bg">
            {" "}
            <img src={ShareScreen} alt="LiveGo" /> Share Screen{" "}
          </li>
          <li className="game-bg">
            {" "}
            <img src={Game} alt="LiveGo" /> Game Live{" "}
          </li>
        </ul>
        <div className="close-area" onClick={liveToggle}>
          <img src={Close} alt="Close" />
        </div>
      </div>
    </div>
  );
};

export default LiveMainArea;
