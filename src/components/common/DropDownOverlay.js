import React from "react";
import classnames from "classnames";
export default function DropDownOverlay({
  overlayCheck,
  children,
  classnameLists,
  idKey
}) {
  return (
    <div
      className={classnames("fffb-overlay", classnameLists, {
        active: overlayCheck
      })}
      id={"fffb-overlay" + idKey}
    >
      <div className="fffb-overlay-inner">
        <div className="fffb-overlay-inner-inner">{children}</div>
      </div>
    </div>
  );
}
