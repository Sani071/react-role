import React, { useState, useEffect } from "react";
import Button from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateLanguage } from "../../../store/actions/user/userProfile";
import Input from "../../common/Input";
import Spinner from "../../common/Spinner";
import AddSkill from "./AddSkill";
import Select from "../../common/Select";
export default function BasicInfoLanguage() {
  const [motherToung, setMotherToung] = useState("");
  const [language, setLanguage] = useState("");
  const [otherLanguages, setOtherLanguages] = useState([]);
  const [addSkill, setAddSkill] = useState(false);
  const [editCheck, setEditCheck] = useState(false);

  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.meta.isLoading);
  useEffect(() => {
    setMotherToung(user.motherToung);
    setOtherLanguages(user.otherLanguages);
    setEditCheck(false);
  }, [user]);

  const addSkillToggle = () => {
    setAddSkill(!addSkill);
  };

  const addSkillHander = () => {
    // e.preventDeafult()
    let languages = [...otherLanguages];
    let newLand = languages.concat(language);
    setOtherLanguages(newLand);
    setLanguage("");
  };

  const skillRemove = i => {
    let newLand = otherLanguages;
    newLand = otherLanguages.filter(ol => ol !== otherLanguages[i]);
    // if (i > -1) {
    // newLand =   newLand.splice(1, i);
    //   }
    setOtherLanguages(newLand);
  };

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    let data = {
      motherToung,
      otherLanguages
    };
    dispatch(updateLanguage(data));
  };

  const editChangeHandler = () => {
    setEditCheck(!editCheck);
    setAddSkill(false);
  };
  return (
    <div className="basic-intro-item">
      <div className="bii-header">
        <div className="intro-item">
          <i class="fas fa-user"></i>
          <p className="f-16">Language</p>
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
                  <h5>Mother Tongue</h5>
                  <h6>
                    {user.motherToung} <span></span>
                  </h6>
                </li>
                <li>
                  <h5>Other Languages</h5>
                  <h6>
                    {user.otherLanguages.join(",")} <span></span>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {editCheck && (
        <form>
          <div className="basic-occupation about-personal-information">
            <div className="basic-occupation-item">
              <h5>Mother Tongue</h5>
              <Input
                placeholder="Language"
                value={motherToung}
                onChange={e => setMotherToung(e.target.value)}
              />
            </div>

            <div className="basic-occupation-item language-add">
              <h5>Other Languages</h5>
              <div className="about-other-languages-add-area">
                <ul className="aolaa-lists">
                  {otherLanguages &&
                    otherLanguages.map((ol, i) => {
                      return (
                        <li>
                          {ol}{" "}
                          <i
                            class="fas fa-times"
                            onClick={() => skillRemove(i)}
                          ></i>
                        </li>
                      );
                    })}
                </ul>
                {addSkill && (
                  <AddSkill
                    language={language}
                    setLanguage={setLanguage}
                    addSkillToggle={addSkillToggle}
                    addSkillHander={addSkillHander}
                  />
                )}

                <button
                  className="add-button"
                  type="button"
                  onClick={addSkillToggle}
                >
                  <i class="fas fa-plus"></i> Add
                </button>
              </div>
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
              text={loading.updateLanguage ? <Spinner /> : "Save"}
              type="button"
              onClick={submitHandler}
            />
          </div>
        </form>
      )}
    </div>
  );
}
