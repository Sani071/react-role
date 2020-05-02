import React from "react";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import BasicInfo from "./BasicInfo";
import { useSelector } from "react-redux";
import AllFriends from "./AllFriends";
import AllFollowers from "./AllFollowers"
export default function ProfileFriendMain() {
  const user = useSelector(state => state.auth.user);

  return (
    <section className="profile-about-section">
      <div className="roy-container">
        <div className="profile-about-inner-section">
          <div className="pais-left"></div>
          <div className="pais-middle">
            <div className="pais-middle-links-area">
              <ul className="pmla-lists">
                <li>
                  <NavLink exact to="/profile/friends">
                    {" "}
                    All Friends
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile/friends/recent">
                    {" "}
                    Recently Addes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile/friends/community">
                    {" "}
                    My Community
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile/friends/followers"> Followers</NavLink>
                </li>
              </ul>
              <i class="fas fa-ellipsis-h"></i>
            </div>

            <div className="pais-middle-content-main">
              <Route exact path="/profile/friends/" component={AllFriends} />
              <Route exact path="/profile/friends/followers" component={AllFollowers} />
            </div>
          </div>
          <div className="pais-right">sdfsdf</div>
        </div>
      </div>
    </section>
  );
}
