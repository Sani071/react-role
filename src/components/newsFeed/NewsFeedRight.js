import React, { useState } from "react";
import User from "../../assets/images/home/profile.png";
import Full from "../../assets/images/home/fullwidth.png";
import Chat from "../../assets/images/home/chatdown.png";
import Max from "../../assets/images/home/maximize.png";
import ProfileThumb from "../common/ProfileThumb";
import ContactItem from "../common/ContactItem";
import NewsFeedRightContent from "./NewsFeedRightContent";
const NewsFeedRight = () => {
  const [items, setItems] = useState([{}, {}, {}]);
  const [users, setUsers] = useState([{}, {}, {}, {}]);
  return <NewsFeedRightContent />;
};

export default NewsFeedRight;
