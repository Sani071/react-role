import React, { useEffect } from "react";
import ProfileThumb from "../../common/ProfileThumb";
import PostImage from "../../../assets/images/newsfeed/post-image.png";
import ReactImage from "../../../assets/images/newsfeed/react.png";
import CommentImage from "../../../assets/images/newsfeed/comment.png";
import LikeImage from "../../../assets/images/newsfeed/share.png";
import CommentInnerLike from "../../../assets/images/newsfeed/like.png";
import CommentLove from "../../../assets/images/newsfeed/comment-love.png";
import CommentSmile from "../../../assets/images/newsfeed/comment-smile.png";
import Comment from "./Comment";

const Posts = () => {
  useEffect(
    () => {
      var p = document.getElementById("od")
      // console.log(p.lastChild.className="d-none")
    }
  )
  return (
    <div className="t-post">
      <div className="t-post-top">
        <div className="t-post-top-top">
          <div className="tptt-left">
            <div className="tptt-left-left">
              <ProfileThumb />
            </div>
            <div className="tptt-left-right">
              <div className="user-identity">
                <h6> Rosemary Flores </h6>
                <span> is with </span>
                <h6> Tomothy Cooper </h6>
                <span> at </span>
                <h6> Roytter HQ</h6>
              </div>
              <div className="user-action-info">
                <ul>
                  <li>Yesterday at 6:55 am</li>
                  <li>Dhaka</li>
                  <li>
                    <i style={{ color: "#7989B1" }} className="fa fa-users"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tptt-right">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="t-post-top-bottom">
          <p>
            Turn own structure snapped devious sinking owner this chair. The
            know first much you multitude instantly the judgment, he a from
            people, ducks. Opulence reclined.... <span>See more</span>{" "}
          </p>
        </div>
      </div>
      <div className="t-post-middle">
        <img src={"https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} alt="PostImage" />
      </div>

      <div className="t-post-bottom">
        <div className="t-post-bottom-top">
          <div className="t-post-bottom-t-top">
            <p>
              {" "}
              <i className="fas fa-eye"></i> 2.2 M Views
            </p>
            {" "}
            <div className="t-post-bottom-t-top-reaction-area-container  d-inline-flex align-items-center">
              <ul className="list-inline p-0 m-0">
                <li className="list-inline-item p-0 m-0">
                  <img src={CommentInnerLike} />
                </li>
                <li className="list-inline-item p-0 m-0">
                  <img src={CommentSmile} />
                </li>
                <li className="list-inline-item p-0 m-0">
                  <img src={CommentLove} />
                </li>
              </ul>
              <p className="d-inline"> 400 Reactions</p>

            </div>
          </div>
          <div className="t-post-bottom-t-bottom">
            <div className="tpbtb-lists">
              <div>
                <img src={CommentImage} alt="CommentImage" />
                <span> Comment</span>
              </div>
              <div>
                <img src={LikeImage} alt="CommentImage" />
                <span>Share</span>
              </div>
              <div>
                <img src={ReactImage} alt="CommentImage" />
                <span>Like</span>
              </div>
              {/* <li>
                <a href="/">
                  
                </a>
              </li>
              <li>
                <a href="/">
                 
                </a>
              </li>
              <li>
                <a href="/">
                  
                </a>
              </li> */}
            </div>
          </div>
        </div>
      </div>
      <div className="post-comment-area">
        <div className="post-comment-area-top">
          <h6>
            Most Interactive Comments <span className="ml-1 pointer"><i className="fas fa-chevron-down"></i></span>
          </h6>
          <Comment />
        </div>
        {/* <div className="post-comment-area-bottom pb-2 mb-2">
          <div>
         
          </div>
        </div> */}
      </div>

    </div>
  );
};

export default Posts;
