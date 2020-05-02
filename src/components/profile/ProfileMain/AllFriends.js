import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendItem from "./FriendItem";
export default function AllFriends() {
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");
  const user = useSelector(state => state.auth.user);
  console.log(user.friends);
  return (
    <div className="basic-intro-main-area find-friend-main-area-inner">
      <div className="ffmai-row">
        {user.friends &&
          user.friends.map((fd, i) => {
            return <FriendItem item={fd} key={i} />;
          })}
      </div>
    </div>
  );
}
