import React, {
  useState,
  useEffect,
  useRef,
  loadingItemCheck,
  createRef
} from "react";
import ProfilePic from "../../../assets/images/friend/find-friend-profile.png";
import Flag from "../../../assets/images/friend/canada.png";
import classnames from "classnames";
import DropDownOverlay from "../../common/DropDownOverlay";
export default function FollowItem({
  idKey,
  item,
  requestCheck,
  addFriendHandler,
  loadingItemCheck
}) {
  const parentWrapper = useRef();
  const parentWrapperInner = useRef();

  const [followOverlay, setFollowOverlay] = useState(false);
  const [addFriendOverlay, setAddFriendOverlay] = useState(false);
  const followOverlayHandler = () => {
    setFollowOverlay(!followOverlay);
  };
  const requestSendHandler = () => {
    setAddFriendOverlay(!addFriendOverlay);
  };
  useEffect(() => {
    // Update the document title using the browser API
    let addOverElement = document.getElementById("fffb-overlay" + idKey);
    let addOverElementUl = document.querySelector(`#fffb-overlay${idKey} ul`);
    let addOverElementUlLi = document.querySelector(
      `#fffb-overlay${idKey} ul li`
    );

    let addOverFollowElement = document.getElementById(
      "follow-fffb-overlay" + idKey
    );
    let addButtonFollow = document.getElementById(
      "find-friend-follow-btn" + idKey
    );

    window.addEventListener("click", event => {
      let addButton = document.getElementById("find-friend-btn" + idKey);
      if (
        addOverElement === event.target ||
        addOverElementUl === event.target ||
        addOverElementUlLi === event.target ||
        event.target === addButton
      ) {
        // setAddFriendOverlay(true);
        // console.log(true);
      } else {
        if (addFriendOverlay) {
          setAddFriendOverlay(false);
        }
      }

      if (
        event.target === parentWrapper.current ||
        event.target === parentWrapperInner.current
      ) {
      } else {
        setFollowOverlay(false);
      }
    });

    // window.addEventListener("click", event => {
    //   console.log(event.target);

    // });
  }, [addFriendOverlay, idKey]);
  // console.log(parentWrapper);
  let { name, photo, coverPhoto, occupation, _id } = item;
  // console.log(loadingItemCheck);
  return (
    <div className="find-friend-item">
      <div className="find-friend-item-inner">
        <div className="find-friend-item-top">
          <div className="flag">
            <img src={Flag} alt="Flag" />
          </div>
          <div className="close-btn">
            <i class="fas fa-times"></i>
          </div>
          {coverPhoto && <img src={coverPhoto} alt="coverPhoto" />}
        </div>
        <div className="find-friend-item-thumb">
          <img src={photo ? photo : ProfilePic} alt="ProfilePic" />
        </div>
        <div className="find-friend-item-content">
          <h6>{name}</h6>
          <p>{occupation}</p>
          <span>Static Mutual Friends</span>
        </div>

        <div className="find-friend-item-btn-area">
          {/* {loadingItemCheck && <p>asdf</p>} */}
          <div
            className="find-friend-follow-btn"
            onClick={followOverlayHandler}
            id={"find-friend-follow-btn" + idKey}
            ref={parentWrapper}
          >
            <i class="far fa-comment-dots"></i>
            <div
              className={classnames("fffb-overlay", { active: followOverlay })}
              id={"follow-fffb-overlay" + idKey}
            >
              <div className="fffb-overlay-inner">
                <div className="fffb-overlay-inner-inner">
                  <div className="fffb-overlay-content">
                    <i class="fas fa-times"></i> Unfollow
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative">
            {!requestCheck && (
              <button
                className="find-friend-btn friend-btn"
                onClick={addFriendHandler}
                id={"find-friend-btn" + idKey}
                disabled={loadingItemCheck ? true : false}
              >
                Follow <i class="fas fa-angle-down"></i>
              </button>
            )}
            {requestCheck && (
              <button
                className="find-friend-btn request-send-btn"
                onClick={requestSendHandler}
                id={"find-friend-btn" + idKey}
              >
                Request Sent
              </button>
            )}
            <DropDownOverlay
              overlayCheck={addFriendOverlay}
              classnameLists={["add-button-overlay"]}
              idKey={idKey}
            >
              <ul className="abo-lists">
                <li>
                  {" "}
                  <i class="fas fa-times"></i> Cancel Request
                </li>
                <li>
                  {" "}
                  <i class="far fa-comment"></i> Send Message
                </li>
              </ul>
            </DropDownOverlay>
          </div>
        </div>
      </div>
    </div>
  );
}
