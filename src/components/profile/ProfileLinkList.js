import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProfileLinkList() {
  const user = useSelector(state => state.auth.user);
  return (
    <div className="Profile-link-list-main">
      <div className="pllm-leff"></div>
      <div className="pllm-middle">
        <div className="pllm-middle-left">
          <ul className="profile-link-lists">
            <li>
              <NavLink to="/profile/timeline"> Timeline </NavLink>
            </li>
            <li>
              <NavLink to="/profile/about"> About </NavLink>
            </li>
            <li>
              <NavLink to="/profile/friends"> Friends </NavLink>
            </li>
          </ul>
        </div>
        <div className="pllm-middle-center">
          <h4>{user.name}</h4>
          <p>{user.occupation}</p>
        </div>
        <div className="pllm-middle-right">
          <ul className="profile-link-lists">
            <li>
              <NavLink to="/profile/photos"> Photos </NavLink>
            </li>
            <li>
              <NavLink to="/profile/videos"> Videos </NavLink>
            </li>
            <li>
              <NavLink to="/profile/more"> More </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="pllm-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2929 0.585862C12.6834 0.195338 13.3166 0.195338 13.7071 0.585862L16.7305 3.60922H21C21.5523 3.60922 22 4.05694 22 4.60922V8.87875L25.0208 11.8996C25.4113 12.2901 25.4113 12.9233 25.0208 13.3138L22 16.3346V20.6092C22 21.1615 21.5523 21.6092 21 21.6092H16.7254L13.7071 24.6275C13.3166 25.018 12.6834 25.018 12.2929 24.6275L9.27461 21.6092H4.99999C4.4477 21.6092 3.99999 21.1615 3.99999 20.6092V16.3346L0.979173 13.3138C0.588648 12.9233 0.588648 12.2901 0.979172 11.8996L3.99999 8.87876V4.60922C3.99999 4.05694 4.4477 3.60922 4.99999 3.60922H9.26952L12.2929 0.585862ZM13.2226 20.8319C17.6409 20.8319 21.2226 17.2502 21.2226 12.8319C21.2226 8.4136 17.6409 4.83188 13.2226 4.83188C8.80437 4.83188 5.22264 8.4136 5.22264 12.8319C5.22264 17.2502 8.80437 20.8319 13.2226 20.8319Z"
            fill="#42588F"
          />
        </svg>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
}
