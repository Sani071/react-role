import React from 'react';
import ProfileThumb from "./ProfileThumb"
import ChatUser from "../../assets/images/home/chat-user.png"
const ContactItem = () => {
    return (
        <div className="user-contact-item">
            <div className="user-contact-item-left">
                <ProfileThumb photo={ChatUser} />
                <div className="ucil-content">
                    <p className="f-14">Abraham Linkan</p>
                    <span>Online</span>
                </div>
            </div>
            <div className="user-contact-item-right">
                <div className="message-amount">
                    <span>2</span>
                </div>
                <span>3h</span>
            </div>
        </div>
    );
}

export default ContactItem;
