import React from "react";
import Pdf from "../../../assets/images/profile/pdf.png";
import Word from "../../../assets/images/profile/word.png";
import { NavLink } from "react-router-dom";
import BasicPhoto from "../../../assets/images/profile/basic.png";
import Skill from "../../../assets/images/profile/light.png";
import Education from "../../../assets/images/profile/education.png";
import Bag from "../../../assets/images/profile/bag.png";
import { Route } from "react-router-dom";
import BasicInfo from "./BasicInfo";
import EducationInfo from "./Education";
import SkillInfo from "./Skills";
import WorkAndExperienceInfo from "./WorkAndExperience";
import { useSelector } from "react-redux";
import Swiper from 'react-id-swiper'
// import 'react-id-swiper/lib/styles/css/swiper.css';

import '../../../../node_modules/swiper/dist/css/swiper.min.css';
export default function ProfileAboutMain() {
  const user = useSelector(state => state.auth.user);
  const params = {
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 0
  }
  return (
    <section className="profile-about-section">
      <div className="roy-container">
        <div className="profile-about-inner-section">
          <div className="pais-left">
            <div className="profile-about-left-item">
              <div className="pali-header">
                <h5>Intro</h5>
                {/*  <span className="edit">Edit</span> */}
              </div>
              <div className="pali-wrapper">
                <div className="pali-wrapper-intro">
                  {/* <p> */}
                  {/* {user.intro} */}
                  <div dangerouslySetInnerHTML={{ __html: user.intro }} />
                  {/* </p> */}
                </div>
              </div>
            </div>

            <div className="profile-about-left-item">
              <div className="pali-header">
                <h5>Ambition</h5>
                {/* <span className="edit">Edit</span> */}
              </div>
              <div className="pali-wrapper">
                <div className="pali-wrapper-intro">
                  {/* <p> */}
                  {/* {user.intro} */}
                  <div dangerouslySetInnerHTML={{ __html: user.ambition }} />
                  {/* </p> */}
                </div>
              </div>
            </div>

            <div className="profile-about-left-item">
              <div className="pali-header">
                <h5>Occupation</h5>
                {/* <span className="edit">Edit</span> */}
              </div>
              <div className="pali-wrapper">
                <div className="pali-wrapper-occupation">
                  <ul>
                    <li>
                      <p> {user.occupation}</p>

                      <span>(First)</span>
                    </li>
                    <li>
                      <p> {user.secondOccupation}</p>

                      <span>(Second)</span>
                    </li>
                    <li>
                      <p> {user.thirdOccupation}</p>

                      <span>(third)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="profile-about-left-item">
              <div className="pali-header">
                <h5>Overview</h5>
                {/* <span className="edit">Edit</span> */}
              </div>
              <div className="pali-wrapper">
                <div className="pali-wrapper-over">
                  <ul>
                    <li>
                      <h6>Friends</h6>
                      <p>(3275)</p>
                    </li>
                    <li>
                      <h6>Followers</h6>
                      <p>(78575)</p>
                    </li>
                    <li>
                      <h6>Following</h6>
                      <p>(987575)</p>
                    </li>
                    {/* <li>
                      <h6>Relationship</h6>
                      <p>It’s Complicated</p>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="profile-about-left-item">
              <div className="pali-header">
                <h5>Personal Information</h5>
                {/* <span className="edit">Edit</span> */}
              </div>
              <div className="pali-wrapper">
                <div className="pali-wrapper-over">
                  <ul>
                    <li>
                      <h6>Date of Birth</h6>
                      <p>27 Feb 1998</p>
                    </li>
                    <li>
                      <h6>Birthplace</h6>
                      <p> {user.birthPlace}</p>
                    </li>
                    <li>
                      <h6>Blood Group</h6>
                      <p>{user.bloodGroup}</p>
                    </li>
                    {/* <li>
                      <h6>Lives Now</h6>
                      <p> {user.livesNow}</p>
                    </li> */}

                    {/* <li>
                      <h6>Nationality</h6>
                      <p>Bangladesh</p>
                    </li> */}

                    <li>
                      <h6>Gender</h6>
                      <p> {user.gender}</p>
                    </li>
                    {/* <li>
                      <h6>Religion</h6>
                      <p>Islam</p>
                    </li> */}
                    <li>
                      <h6>Lives Now</h6>
                      <p> {user.livesNow}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="profile-about-left-item">
              <div className="pali-header">
                <h5>Hobby</h5>
                {/* <span className="edit">Edit</span> */}
              </div>
              <div className="pali-wrapper">
                <div className="pali-wrapper-occupation">
                  <ul>
                    <li>
                      <h6>Play Guitar 🎸</h6>
                    </li>
                    <li>
                      <h6>Fishing 🎣</h6>
                    </li>
                    <li>
                      <h6>Playing Football ⚽</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pali-fotter">
                <a href="#">View All</a>
              </div>
            </div>

            <div className="profile-about-left-item">
              <div className="pali-header">
                <h5>My CV</h5>
                {/* <span className="edit">Edit</span> */}
              </div>
              <div className="pali-wrapper">
                <div className="pali-wrapper-occupation">
                  <ul>
                    <li>
                      <h6>
                        <img src={Pdf} alt="Pdf" /> PDF Version
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <img src={Word} alt="Word" /> Word Version
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pais-middle">
            <ul className="pmla-lists">
            <Swiper {...params}>
              <div>
                  <li className="inner-list">
                    <NavLink exact to="/profile/about">
                      {" "}
                      {/* <img src={BasicPhoto} alt="BasicPhoto" /> Basic Info */}
                    Basic Info
                  </NavLink>
                  </li>
              </div>
              <div>

                  <li className="inner-list">
                    <NavLink to="/profile/about/my_contact">
                      {" "}
                    Contact Info
                    {/* <img src={Education} alt="Bag" />Contact */}
                    </NavLink>
                  </li>
              </div>
              <div>

                  <li className="inner-list">
                    <NavLink to="/profile/about/education">
                      {" "}
                      {/* <img src={Education} alt="Bag" /> Education */}
                    Education
                  </NavLink>
                  </li>
              </div>
              <div>

                  <li className="inner-list">
                    <NavLink to="/profile/about/work_experience">
                      {" "}
                      {/* <img src={Bag} alt="Bag" /> Work 
                     */}
                     Family 
                  </NavLink>
                  </li>
              </div>
              <div>
                  <li className="inner-list">
                    <NavLink to="/profile/about/skills">
                      {" "}
                    Skills
                    {/* <img src={Skill} alt="Skill" /> Skills */}
                    </NavLink>
                  </li>
              </div>
              <div>
                  <li className="inner-list">
                    <NavLink to="/profile/about/work">
                      {" "}
                    Work 
                    {/* <img src={Skill} alt="Skill" /> Skills */}
                    </NavLink>
                  </li>
              </div>
            </Swiper>
            </ul>
            <div className="pais-middle-links-area">

        
               

          
              {/* <i class="fas fa-ellipsis-h"></i> */}
            </div>

            <div className="pais-middle-content-main">
              <Route exact path="/profile/about/" component={BasicInfo} />
              <Route
                path="/profile/about/education"
                component={EducationInfo}
              />
              <Route path="/profile/about/skills" component={SkillInfo} />
              <Route
                path="/profile/about/work_experience"
                component={WorkAndExperienceInfo}
              />
            </div>
          </div>
          <div className="pais-right">sdfsdf</div>
        </div>
      </div>
    </section>
  );
}
