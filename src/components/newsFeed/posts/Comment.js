import React, { useState, useEffect } from "react";
import CommentLike from "../../../assets/images/newsfeed/comment-like.png";
import CommentInnerLike from "../../../assets/images/newsfeed/like.png";
import CommentLove from "../../../assets/images/newsfeed/comment-love.png";
import CommentSmile from "../../../assets/images/newsfeed/comment-smile.png";
import classnames from "classnames"
import ProfileThumb from "../../common/ProfileThumb";
import SelfCommentInput from "./selfCommentInput";

export default function Comment() {
  let [isShow, setShow] = useState(false);

  // window.addEventListener("click", (e) => {
  //   e.preventDefault()
  //   setShow(false)
  // });
  // useEffect(console.log(window.screen.availHeight))

  return (
    <div className="post-comment-container">

      <div className="post-comment">
        <div className="post-comment-left">
          <ProfileThumb />
        </div>
        <div className="post-comment-right">
          <div className="post-comment-right-top">
            <h5>Albert Maxwell</h5>
            <p>Yesterday at 7:55 pm</p>
          </div>
          <div className="post-comment-right-bottom">
            <div className="post-comment-right-bottom-action pointer" onClick={() => {
              setShow(!isShow)
            }}>
              <span>
                <i className="fas fa-ellipsis-v"></i>
              </span>
              <div className={classnames('comment-action-content-area', { 'active': isShow })}>
                <ul>

                  <li>Hide Comment</li>
                  <li>Report Comment</li>
                  {/* <li>Advertising on Roytter</li>
                  <li>Setting</li> */}
                  {/* <li onClick={logoutHander}>Log Out</li> */}
                </ul>
              </div>
            </div>

            <p>
              Why would someone always sleep after he eats anyway? And why would
              someone always codes after he awakens?
            </p>
            <hr className="mb-1 pb-1" />
            <div className="comment-report-area">
              <div className="comment-reply-report">
                <div className="comment-reply-report-button pointer">Reply</div>
                <div className="comment-reply-report-sperator"></div>
                <div className="comment-reply-report-amount">123 Replies</div>
              </div>
              <div className="comment-report-area-reaction-area">
                <div className="comment-report-area-reaction-area-like-button">
                  <div>
                    {" "}
                    {/* <i class="fa fa-thumbs-up" aria-hidden="true"></i> Like */}
                    {/* <img src={CommentLike} alt="" />  */}
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8052 7.11383C11.0062 6.76578 11.1199 6.39453 11.1199 5.9457C11.1199 4.9141 10.267 3.93992 9.15316 3.93992H8.31717C8.42992 3.63969 8.51998 3.28063 8.51998 2.84914C8.51998 1.14303 7.65625 0.394531 6.33671 0.394531C4.92488 0.394531 5.00541 2.61952 4.69221 2.93984C4.17092 3.47298 3.5552 4.4972 3.11646 4.89453H0.853206C0.4482 4.89453 0.119873 5.23032 0.119873 5.64453V11.2695C0.119873 11.6837 0.4482 12.0195 0.853206 12.0195H2.31987C2.66117 12.0195 2.94797 11.7811 3.02979 11.4582C4.04978 11.4817 4.74991 12.3943 7.10441 12.3943C7.26987 12.3943 7.45321 12.3945 7.61362 12.3945C9.38089 12.3945 10.18 11.4706 10.2018 10.1602C10.5071 9.7284 10.667 9.14956 10.5992 8.59016C10.825 8.15769 10.9123 7.64462 10.8052 7.11383ZM9.39012 8.37547C9.67796 8.8707 9.419 9.53351 9.07066 9.72477C9.24712 10.868 8.66715 11.2693 7.85333 11.2693H6.98662C5.3449 11.2693 4.28179 10.3829 3.05321 10.3829V6.01953H3.30346C3.95337 6.01953 4.86133 4.35805 5.47 3.73531C6.11992 3.07062 5.90335 1.96273 6.33671 1.51953C7.41998 1.51953 7.41998 2.2925 7.41998 2.84914C7.41998 3.76719 6.77006 4.17852 6.77006 5.06492H9.15316C9.63694 5.06492 10.0178 5.50813 10.0199 5.95133C10.0219 6.3943 9.72608 6.8375 9.50952 6.8375C9.81864 7.17863 9.88469 7.89772 9.39012 8.37547ZM2.13654 10.5195C2.13654 10.8302 1.8903 11.082 1.58654 11.082C1.28278 11.082 1.03654 10.8302 1.03654 10.5195C1.03654 10.2089 1.28278 9.95703 1.58654 9.95703C1.8903 9.95703 2.13654 10.2089 2.13654 10.5195Z" fill="#00465F" />
                    </svg>

                    <span> Like</span>
                  </div>
                </div>
                <div className="comment-report-area-reaction-area-sperator"></div>
                <div className="comment-report-area-reaction-area-container">
                  <div className="icons-container d-inline-flex align-items-center">
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
                  </div>
                  <p className="reaction-amount">203</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <hr className="w-100 mt-3 mb-1 py-1" />
      <div className="self-comment-parent-wrapper">
        <SelfCommentInput />
      </div>

    </div>
  );
}
