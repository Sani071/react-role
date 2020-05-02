import React from "react";
import EducationElementary from "./EducationElementary"
import EducationSecondary from "./EducationSecondary"
import EducationHigherSecondary from "./EducationHigherSecondary"
import EducationNewDegree from "./EducationNewDegree"
export default function Education() {
  return (
    <div className="basic-intro-main-area">
      <EducationElementary />
      <EducationSecondary/>
      <EducationHigherSecondary />
      <EducationNewDegree />
    </div>
  );
}
