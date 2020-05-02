import React from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
export default function AddSkill({
  language,
  setLanguage,
  addSkillToggle,
  addSkillHander
}) {
  const setInnerLanguage = val => {
    setLanguage(val);
  };

  const addInnerSkillHander = e => {
    e.preventDefault();
    addSkillHander();
  };
  return (
    <div className="add-skill-area">
      <form onSubmit={addInnerSkillHander}>
        <Input
          placeholder="Add language"
          value={language}
          onChange={e => {
            setInnerLanguage(e.target.value);
          }}
        />

        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            addSkillToggle();
          }}
          className="auth-btn profile-cancel"
        >
          cancel
        </a>
        {/* <a
          href="/"
          onClick={e => {
            e.preventDefault();
            addSkillHander();
          }}
          className="auth-btn profile-save"
        >
          Add
        </a> */}
        <Button
          classNames={["profile-save"]}
          //   onClick={addSkillHander}
          text={"Add"}
          type="submit"
          disabled={!language ? true : false}
        />
      </form>
    </div>
  );
}
