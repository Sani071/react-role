import React, { useState } from "react";
import Logo from "../../assets/images/logo/light.png";
// import Sit from "../../assets/images/newsfeed/sd.svg";
// import People from "../../assets/images/newsfeed/image 20.png";
import SearchInput from "./SearchInput";
import Cele from "../../assets/images/navtwo/celebrity.png";
import Vec from "../../assets/images/navtwo/Vector-1.png";
import VecOne from "../../assets/images/navtwo/Vector.png";
import VecTwo from "../../assets/images/navtwo/Vector-2.png";
import VecThree from "../../assets/images/navtwo/Vector-3.png";
import Vot from "../../assets/images/navtwo/voting.png";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userAction";
import { withRouter } from "react-router-dom";
import ProfilePic from "../../assets/images/profile/profile.png";

const NewsFeedNav = ({ navTwo, history }) => {
  let [searchSelect, setSearchSelect] = useState(false);
  let [sSitting, setSSitting] = useState(false);
  const searchHandler = () => {
    setSearchSelect(true);
  };
  const dispatch = useDispatch();
  const setSittingHander = () => {
    setSSitting(!sSitting);
  };
  const unSelectHandler = () => {
    setSearchSelect(false);
  };
  const logoutHander = () => {
    dispatch(logout(history));
  };
  const user = useSelector(state => state.auth.user);
  return (
    <React.Fragment>
      <header className="header-news">
        <div className="header-container">
          <div className="header-con-inner">
            <div className="header-top-left">
              <Link to="/newsfeed">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div
              className={[
                "header-top-middle",
                searchSelect ? "search-selected" : null
              ].join(" ")}
            >
              <SearchInput
                searchHandler={searchHandler}
                unSelectHandler={unSelectHandler}
              />
            </div>
            <div className="header-top-right">
              <ul className="htr-list">
                <li>
                  <Link to="/newsfeed">
                    {" "}
                    <i className="fas fa-home"></i>
                  </Link>
                </li>
                <li className="community-link-nav">
                  {/* <img class="change-my-color"  src={Sit} />
                   */}
                  <h1>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9156 11.0163C23.2291 11.0251 23.6544 10.6535 23.8181 10.4123C24.4277 9.6154 23.473 8.08802 21.2346 6.92931C22.1028 5.28963 22.7065 3.81987 23.0111 2.76418C23.1763 2.18653 23.0644 1.83643 23.0331 1.77539C22.949 2.28907 22.2583 4.14165 20.6769 6.66075C19.4548 6.11288 17.914 5.67928 16.093 5.49861C15.656 4.67145 14.388 2.38039 13.1365 1.15624C12.3133 0.348116 11.6544 0.0517229 11.1401 0.0102181H11.1377C10.4616 -0.065467 10.0295 0.295869 9.79827 0.547339C8.95747 1.45214 8.60892 2.93362 8.57617 4.65241C8.22225 4.04937 7.73684 3.44974 7.18298 3.38627H7.17419C6.16425 3.21634 5.29754 4.81305 5.41437 7.35559C3.53919 7.42297 1.94362 7.63635 0.868176 7.90394C0.384227 8.02357 0.075281 8.25893 0 8.37856C0.0488838 8.36 1.095 7.92835 5.45348 7.92835C5.70865 10.5163 6.90777 12.9001 6.72446 12.4787C6.24882 13.2307 4.85514 15.5237 4.41176 17.2493C4.12481 18.3666 4.19814 19.0858 4.41909 19.5512C4.69138 20.1737 5.22128 20.3676 5.5532 20.4428C6.77529 20.7216 8.26038 20.2655 9.79142 19.4105C9.42333 20.0375 9.11194 20.8026 9.34854 21.3315C9.70588 22.291 11.5234 22.2426 13.6718 20.87C14.6583 22.4414 15.6306 23.6992 16.3946 24.4892C16.5201 24.6243 16.6641 24.7409 16.8224 24.8354C17.0736 24.9922 17.2418 25 17.2418 25C16.839 24.6704 15.5798 23.1445 14.1846 20.5185C15.2708 19.7372 16.4162 18.6205 17.4828 17.1361C23.4867 17.3607 24.4874 15.9271 24.7176 15.5911C25.4347 14.6204 24.8853 12.7864 21.9156 11.0163V11.0163ZM18.11 16.2029C19.2739 14.3616 19.5931 12.8938 19.5496 11.6945C20.9115 12.5525 21.8559 13.5295 21.9478 14.5672C22.0036 15.1985 21.5519 15.9891 18.11 16.2029ZM10.5887 18.93C11.0658 18.6258 11.5434 18.2894 12.0161 17.9295C12.3427 18.5804 12.6809 19.204 13.0231 19.7943C11.0384 20.8617 9.65797 20.4174 10.5887 18.93V18.93ZM21.0987 10.5632C20.5957 10.3024 20.0644 10.0583 19.5159 9.82829C19.9044 9.23894 20.2751 8.63807 20.6275 8.0265C22.5369 9.20328 22.8713 10.6232 21.0987 10.5632V10.5632ZM13.6332 19.4335C13.3639 18.8793 13.0955 18.286 12.8266 17.6541C14.9408 17.7162 15.8779 16.7396 15.92 16.6575C15.92 16.661 14.6979 17.4212 12.8633 17.2557C14.3609 16.0062 15.7517 14.6342 17.0213 13.154C17.447 12.6557 17.8532 12.1493 18.24 11.635C18.2224 11.6208 18.1647 11.4885 17.4329 11.049C14.9056 13.992 12.4302 15.8343 10.9436 16.7093C9.9371 16.1634 8.9472 15.1575 8.2203 13.7068C7.24262 11.7575 6.75379 9.68376 6.67704 8.03919C7.27831 8.08363 7.91233 8.14515 8.57617 8.22865C7.48655 10.0256 7.87273 11.3049 7.91771 11.3649C7.91771 11.3615 7.87127 9.9406 8.90223 8.4562C9.34156 11.0192 10.0742 13.5233 11.0859 15.9192C11.1313 15.9007 11.1758 15.9622 11.9985 15.5164C10.7114 11.8801 10.3482 8.76968 10.3365 7.04796C11.3142 6.44151 12.6917 6.08115 14.3269 6.17832C16.5056 6.30869 18.5485 6.92296 20.013 7.67786C19.6646 8.18764 19.2845 8.71613 18.8726 9.26334C17.8592 7.42151 16.5623 7.12072 16.4841 7.12853C16.4895 7.12853 17.7502 7.81556 18.5138 9.43424C16.6808 8.76228 14.7948 8.24436 12.8755 7.88587C12.2368 7.76766 11.5947 7.66914 10.95 7.59046C10.9465 7.61243 10.8615 7.68079 10.8444 8.58315C14.651 9.29069 17.5243 10.5309 19.0192 11.3767C19.0554 12.5266 18.6795 13.8967 17.7771 15.262C16.5745 17.0838 15.0205 18.5448 13.6332 19.4335ZM14.9726 5.41951C12.7944 5.33846 11.3757 5.78231 10.3438 6.42881C10.4416 3.87505 11.3855 2.69924 12.2117 2.75295C13.0378 2.54592 14.8954 5.29988 14.9726 5.41951ZM8.58595 5.57088C8.60941 6.1622 8.66367 6.77306 8.74287 7.39123C8.03161 7.34973 7.33795 7.3302 6.67019 7.32971C6.66628 7.48791 6.66433 4.83942 7.87616 4.90827H7.88056C8.16213 4.96149 8.40019 5.24421 8.58595 5.57088ZM7.21427 13.4812C8.2291 15.4197 9.33094 16.4388 10.4039 17.012C8.11666 18.221 6.61398 17.9886 6.25273 17.2323C6.24295 17.222 5.70865 16.4852 7.21427 13.4817V13.4812Z"
                        fill="white"
                      />
                    </svg>
                  </h1>

                  {/* <i class="fas fa-chevron-down"></i> */}
                  {/* <img src={} alt="sdf" />  */}
                </li>
                <li>
                  <Link to="/newsfeed/requested_friend">
                    <i className="fas fa-user-friends"></i>
                  </Link>
                </li>
                <li>
                  <i className="fas fa-bell"></i>
                </li>

                <li className="profile-image">
                  <Link to="/profile/timeline">
                    <img
                      src={user.photo ? user.photo : ProfilePic}
                      alt="People"
                    />
                  </Link>
                </li>

                <li className="n-sitting">
                  <span onClick={setSittingHander}>
                    <i className="fas fa-cog"></i>
                  </span>
                  <div
                    className={classnames("n-sitting-content-area", {
                      active: sSitting
                    })}
                  >
                    <ul>
                      <li>Manage Groups</li>
                      <li>Manage Pages</li>
                      <li>Advertising on Roytter</li>
                      <li>Setting</li>
                      <li onClick={logoutHander}>Log Out</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {!navTwo && (
        <nav className="news-nav-two">
          <div className="news-nav-two-inner">
            <ul className="nnti-list">
              <li>
                <img src={Cele} alt="Cele" />
                Celebrity
                {/* <i class="fas fa-chevron-down"></i> */}
              </li>
              <li>
                <img src={VecOne} alt="Cele" />
                Channel
                {/* <i class="fas fa-chevron-down"></i> */}
              </li>
              <li>
                <img src={Vec} alt="Cele" />
                Chit Chat
              </li>
              {/* <li>
                <img src={Vot} alt="Cele" />
                
              </li> */}
              <li>
                <img src={VecTwo} alt="Cele" />
                Poll & Query
              </li>
              {/*  */}
              <li>
                <Link to="/newsfeed/find_friend">
                  <img src={VecThree} alt="Cele" />
                  Find Friend
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </React.Fragment>
  );
};

export default withRouter(NewsFeedNav);
