import React from "react";
import BasicIntroItem from "./BasicIntroItem";
import BasicInfoOccupation from "./BasicInfoOccupation";
import BasicInfoPersonalInfo from "./BasicInfoPersonalInfo";
import BasicInfoAmbition from "./BasicInfoAmbition";
import BasicInfoLanguage from "./BasicInfoLanguage";
export default function BasicInfo() {
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");

  return (
    <div className="basic-intro-main-area">
      <BasicIntroItem />

      <BasicInfoAmbition />
      <BasicInfoOccupation />

      <BasicInfoPersonalInfo />
      <BasicInfoLanguage />
    </div>
  );
}
