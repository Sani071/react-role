import React, { useState, useEffect } from "react";
import Button from "../../common/Button";
import Select from "../../common/Select";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInformation } from "../../../store/actions/user/userProfile";
import Spinner from "../../common/Spinner";
const BasicInfoPersonalInfo = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [gender, setGender] = useState("");
  const [livesNow, setLivesNow] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [editCheck, setEditCheck] = useState(false);

  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.meta.isLoading);
  useEffect(() => {
    setBirthPlace(user.birthPlace);
    setGender(user.gender);
    setLivesNow(user.livesNow);
    setBloodGroup(user.bloodGroup);
    setEditCheck(false);
    // setIntro(user.intro)
  }, [user]);
  const dispatch = useDispatch();

  const submithandler = e => {
    e.preventDefault();
    let data = {
      birthPlace,
      gender,
      livesNow,
      bloodGroup
    };

    dispatch(updatePersonalInformation(data));

    // console.log(data)
  };
  let dayOptions = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ];
  let monthOptions = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ];
  let yearOptions = [
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008
  ];

  let area = ["Dhaka", "savar"];
  let bloodOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  let genderOptions = ["Male", "Female", "Other"];
  const editChangeHandler = () => {
    setEditCheck(!editCheck);
  };
  return (
    <div className="basic-intro-item">
      <div className="bii-header">
        <div className="intro-item">
          <i class="fas fa-user"></i>
          <p className="f-16">Personal Information</p>
        </div>
        {!editCheck && (
          <span className="edit" onClick={editChangeHandler}>
            Edit
          </span>
        )}
      </div>
      {!editCheck && (
        <div className="basic-intro-item-data">
          <div className="pali-wrapper about-personal-information">
            <div className="pali-wrapper-occupation">
              <ul>
                <li>
                  <h5>Birthplace</h5>
                  <h6>
                    {user.birthPlace} <span></span>
                  </h6>
                </li>
                <li>
                  <h5>Blood Group</h5>
                  <h6>
                    {user.bloodGroup} <span></span>
                  </h6>
                </li>
                <li>
                  <h5>Gender</h5>
                  <h6>
                    {user.gender} <span></span>
                  </h6>
                </li>
                <li>
                  <h5>Lives Now</h5>
                  <h6>
                    {user.livesNow} <span></span>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {editCheck && (
        <form onSubmit={submithandler}>
          <div className="about-personal-information">
            {/* <div className="about-personal-information-item">
                 <h5>Date of Birth:</h5>
                 <div className="about-personal-information-right">
                     <div className="date-input-select">
                         <div className="date-input-select-top">
                             <Select
                                 placeholder="Day"
                                 options={dayOptions}
                                 onChange={e => setDay(e.target.value)}
                             />
                             <Select
                                 placeholder="Mon"
                                 options={monthOptions}
                                 onChange={e => setMonth(e.target.value)}
                             />
                             <Select
                                 placeholder="Year"
                                 options={yearOptions}
                                 onChange={e => setYear(e.target.value)}
                             />
                         </div>
                     </div>

                     <div className="apir-right">
                         <i class="fas fa-lock"></i>
                         <i class="fas fa-caret-down"></i>
                     </div>
                 </div>
             </div> */}

            <div className="about-personal-information-item">
              <h5>Birthplace:</h5>
              <div className="about-personal-information-right">
                <Select
                  placeholder="Select"
                  value={birthPlace}
                  options={area}
                  onChange={e => setBirthPlace(e.target.value)}
                />

                <div className="apir-right">
                  <i class="fas fa-lock"></i>
                  <i class="fas fa-caret-down"></i>
                </div>
              </div>
            </div>

            <div className="about-personal-information-item">
              <h5>Blood Group:</h5>
              <div className="about-personal-information-right">
                <Select
                  placeholder="Select"
                  value={bloodGroup}
                  options={bloodOptions}
                  onChange={e => setBloodGroup(e.target.value)}
                />

                <div className="apir-right">
                  <i class="fas fa-lock"></i>
                  <i class="fas fa-caret-down"></i>
                </div>
              </div>
            </div>

            <div className="about-personal-information-item">
              <h5>Gender:</h5>
              <div className="about-personal-information-right">
                <Select
                  placeholder="Select"
                  value={gender}
                  options={genderOptions}
                  onChange={e => setGender(e.target.value)}
                />

                <div className="apir-right text-left m-r-10">
                  <i class="fas fa-globe-americas"></i>
                  {/* <i class="fas fa-lock"></i>
         <i class="fas fa-caret-down"></i> */}
                </div>
              </div>
            </div>

            {/* <div className="about-personal-information-item">
     <h5>Religion:</h5>
     <div className="about-personal-information-right">
         <Select
             placeholder="Hindu"
         />

       <div className="apir-right">
         <i class="fas fa-lock"></i>
         <i class="fas fa-caret-down"></i>
       </div>
     </div>
   </div> */}

            <div className="about-personal-information-item">
              <h5>Lives Now:</h5>
              <div className="about-personal-information-right">
                <Select
                  placeholder="Select"
                  options={area}
                  value={livesNow}
                  onChange={e => setLivesNow(e.target.value)}
                />

                <div className="apir-right">
                  <i class="fas fa-lock"></i>
                  <i class="fas fa-caret-down"></i>
                </div>
              </div>
            </div>

            {/* <div className="about-personal-information-item">
     <h5>Nationality:</h5>
     <div className="about-personal-information-right">
         <Select
             placeholder="Bangladeshi"
         />

       <div className="apir-right">
         <i class="fas fa-lock"></i>
         <i class="fas fa-caret-down"></i>
       </div>
     </div>
   </div> */}
          </div>

          <div className="basic-action-area">
            <Button
              classNames={["profile-cancel"]}
              text="Cancel"
              type="button"
              onClick={editChangeHandler}
            />
            <Button
              classNames={["profile-save"]}
              text={loading.updatePersonalInformation ? <Spinner /> : "Save"}
              type="submit"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default BasicInfoPersonalInfo;
