import React, { useState, useEffect } from "react";
import SummerNote from "../../common/SummerNote";
import Button from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateAmbition } from "../../../store/actions/user/userProfile";
import Spinner from "../../common/Spinner";
const BasicInfoAmbition = () => {
  const [ambition, setAmbition] = useState("");
  const [editCheck, setEditCheck] = useState(false);
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.meta.isLoading);
  useEffect(() => {
    setAmbition(user.ambition);
    setEditCheck(false);
  }, [user]);

  const dispatch = useDispatch();

  const onChange = val => {
    setAmbition(val);
  };
  const submitHandler = e => {
    e.preventDefault();
    let data = {
      ambition
    };
    dispatch(updateAmbition(data));
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
          <p className="f-16">Ambition</p>
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
            dangerouslySetInnerHTML={{ __html: ambition }}
          />
        </div>
      )}

      {editCheck && (
        <form onSubmit={submitHandler}>
          <SummerNote
            classNames={["profile-editor-area"]}
            height={65}
            value={ambition}
            onChange={onChange}
          />
          <div className="basic-action-area">
            <Button
              classNames={["profile-cancel"]}
              text="Cancel"
              type="button"
              onClick={editChangeHandler}
            />
            <Button
              classNames={["profile-save"]}
              text={loading.updateAmbition ? <Spinner /> : "Save"}
              type="submit"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default BasicInfoAmbition;
