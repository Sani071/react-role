import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowItem from "./FollowItem";
export default function AllFollowers() {
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");
  const user = useSelector(state => state.auth.user);
  console.log(user.followTo);
  return (
    <div className="basic-intro-main-area find-friend-main-area-inner">
      <div className="ffmai-row">
        {user.followTo &&
          user.followTo.map((fd, i) => {
            return <FollowItem item={fd} key={i} />;
          })}
      </div>
    </div>
  );
}
