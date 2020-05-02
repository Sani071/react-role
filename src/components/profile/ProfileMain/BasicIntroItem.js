import React, { useState, useEffect } from "react";
import SummerNote from "../../common/SummerNote";
import Button from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateIntro } from "../../../store/actions/user/userProfile";
import Spinner from "../../common/Spinner";
const BasicIntroItem = () => {
  const [intro, setIntro] = useState("");
  const [editCheck, setEditCheck] = useState(false);
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.meta.isLoading);
  useEffect(() => {
    setIntro(user.intro);
    setEditCheck(false);
  }, [user]);

  const dispatch = useDispatch();

  const onChange = val => {
    console.log(val);
    setIntro(val);
  };
  const submitHandler = e => {
    e.preventDefault();
    let data = {
      intro
    };
    dispatch(updateIntro(data));
    // editChangeHandler()
    console.log(data);
  };

  const editChangeHandler = () => {
    setEditCheck(!editCheck);
  };

  let disableChecker;
  if (intro.length < 1 || intro.length > 200) {
    disableChecker = true;
  }
  return (
    <div className="basic-intro-item">
      <div className="bii-header">
        <div className="intro-item">
          <i class="fas fa-user"></i>
          <p className="f-16">Intro</p>
        </div>
        {!editCheck && (
          <span className="edit" onClick={editChangeHandler}>
            Edit
          </span>
        )}
      </div>

      {!editCheck && (
        <div className="basic-intro-item-data about-personal-information">
          <div
            className="intro-content"
            dangerouslySetInnerHTML={{ __html: user.intro }}
          />
        </div>
      )}

      {editCheck && (
        <form onSubmit={submitHandler}>
          <SummerNote
            classNames={["profile-editor-area"]}
            height={65}
            value={intro}
            onChange={onChange}
          />
          {/* {intro.length} */}
          <div className="basic-action-area">
            <Button
              classNames={["profile-cancel"]}
              text="Cancel"
              type="button"
              onClick={editChangeHandler}
            />
            <Button
              classNames={["profile-save"]}
              text={loading.updateIntro ? <Spinner /> : "Save"}
              type="submit"
              disabled={disableChecker ? true : false}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default BasicIntroItem;
