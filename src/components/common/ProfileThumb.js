import React from 'react';
import ProfilePic from "../../assets/images/home/chat-profile.png"
const ProfileThumb = ({ photo, classNames, imgClassNames, isHideen }) => {
    return (
        <div className={["profile-thumb", classNames ? classNames.join(" ") : null,].join(" ")}>
            <img src={photo ? photo : ProfilePic} className={imgClassNames} alt="ProfilePic" />
            <span className={isHideen && "d-none"}></span>
        </div>
    );
}

export default ProfileThumb;
