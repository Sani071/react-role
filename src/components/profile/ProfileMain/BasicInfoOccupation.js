import React, { useState, useEffect } from "react";
import Button from "../../common/Button";
import Select from "../../common/Select";
import { useDispatch, useSelector } from "react-redux";
import { updateOccupation } from "../../../store/actions/user/userProfile";
import Spinner from "../../common/Spinner";
const BasicInfoOccupation = () => {
  const [occupation, setOccupation] = useState("");
  const [secondOccupation, setSecondOccupation] = useState("");
  const [thirdOccupation, setThirdOccupation] = useState("");
  const [editCheck, setEditCheck] = useState(false);
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.meta.isLoading);
  const occupations = useSelector(state => state.info.occupations);
  useEffect(() => {
    setOccupation(user.occupation);
    setSecondOccupation(user.secondOccupation);
    setThirdOccupation(user.thirdOccupation);
    setEditCheck(false);
    // setIntro(user.intro)
  }, [user]);

  const dispatch = useDispatch();
  // let occupationOptions = ["Freelancer", "Doctor"];

  const submithandler = e => {
    e.preventDefault();
    let data = {
      occupation,
      secondOccupation,
      thirdOccupation
    };

    dispatch(updateOccupation(data));

    console.log(data);
  };

  const editChangeHandler = () => {
    setEditCheck(!editCheck);
  };
  return (
    <div className="basic-intro-item">
      <div className="bii-header">
        <div className="intro-item">
          <i class="fas fa-user"></i>
          <p className="f-16">Occupation</p>
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
                  <h5>First Occupation</h5>
                  <h6>
                    {user.occupation} <span></span>
                  </h6>
                </li>
                <li>
                  <h5>Second Occupation</h5>
                  <h6>
                    {user.secondOccupation} <span></span>
                  </h6>
                </li>
                <li>
                  <h5>Third Occupation</h5>
                  <h6>
                    {user.thirdOccupation} <span></span>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {editCheck && (
        <form onSubmit={submithandler}>
          <div className="basic-occupation about-personal-information">
            <div className="basic-occupation-item">
              <h5>First Occupation</h5>
              <Select
                placeholder="Select Occupation"
                value={occupation}
                options={occupations}
                onChange={e => setOccupation(e.target.value)}
                withArrow={true}
              />
            </div>
            <div className="basic-occupation-item">
              <h5>Second Occupation</h5>
              <Select
                placeholder="Select Occupation"
                value={secondOccupation}
                options={occupations}
                withArrow={true}
                onChange={e => setSecondOccupation(e.target.value)}
              />
            </div>
            <div className="basic-occupation-item">
              <h5>Third Occupation</h5>
              <Select
                placeholder="Select Occupation"
                value={thirdOccupation}
                options={occupations}
                withArrow={true}
                onChange={e => setThirdOccupation(e.target.value)}
              />
            </div>
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
              text={loading.updateOccupation ? <Spinner /> : "Save"}
              type="submit"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default BasicInfoOccupation;
