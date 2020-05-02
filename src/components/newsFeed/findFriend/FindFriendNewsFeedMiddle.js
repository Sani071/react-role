import React, { useState, useEffect } from "react";
import FindFriendItem from "./FindFriendItem";
import UserAxios from "../../../store/axios/UserAxios";
import LoadingBar from "react-top-loading-bar";
// import InfiniteScroll from "react-infinite-scroller";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../store/actions/userAction";
const FindFriendNewsFeedMiddle = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [hashMoreItem, setHashMoreItem] = useState(true);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const [loadingItem, setLoadingItem] = useState("");
  const [loadingItemFollow, setLoadingItemFollow] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    setLoadingBarProgress(10);
    UserAxios.get(`friend/allUsers?pagination=16&page=${page}`)
      .then(result => {
        console.log(result);
        setLoadingBarProgress(60);
        let { users, totalQuantity } = result.data;
        // setItems(users);
        setItems(items.concat(users));

        setLoadingBarProgress(100);
        if (Number(totalQuantity) === Number(items.length + users.length)) {
          setHashMoreItem(false);
        }

        // setTimeout(() => {

        // }, 200);
      })
      .catch(err => {
        console.log(err.response);
        setLoadingBarProgress(100);
      });
  }, [page]);

  const fetchImages = () => {
    setPage(page + 1);
  };

  const user = useSelector(state => state.auth.user);
  let { requestedToUsers, followTo } = user;
  const addFriendHandler = async val => {
    setLoadingItem(val);
    let data = {
      createType: "friend",
      userId: user._id,
      toUserId: val
    };
    try {
      let result = await UserAxios.post("friend/create", data);
      let { user } = result.data;
      dispatch(setUser(user));
      setLoadingItem("");
      console.log(user);
    } catch (err) {
      setLoadingItem("");
    }
  };

  const addFollowHandler = async val => {
    setLoadingItemFollow(val);
    let data = {
      createType: "follow",
      userId: user._id,
      toUserId: val
    };
    try {
      let result = await UserAxios.post("friend/create", data);
      let { user } = result.data;
      dispatch(setUser(user));
      setLoadingItemFollow("");
      console.log(user);
    } catch (err) {
      setLoadingItemFollow("");
    }
  };

  const removeFriendHandler = async (toUserId) => {
    setLoadingItem(toUserId);
    let data = {
      createType: "friend",
      userId:  user._id,
      toUserId: toUserId
    };
    console.log(data)
    try {
      let result = await UserAxios.patch("friend/cancelFriendRequest", data);
      let { user } = result.data;
      dispatch(setUser(user));
      setLoadingItem("");
    } catch (err) {
      setLoadingItem("");
    }
  }
  const removeFollowHandler = async (toUserId) => {
    setLoadingItem(toUserId);
    let data = {
      createType: "follow",
      userId: user._id,
      toUserId: toUserId
    };
    try {
      let result = await UserAxios.patch("friend/cancelFriendRequest", data);
      let { user } = result.data;
      dispatch(setUser(user));
      setLoadingItem("");
    } catch (err) {
      setLoadingItem("");
    }
  }

  return (
    <main className="news-feed-root-main find-friend-main-area find-friend-main-area-modified">
      {/* <LoadingBar
        progress={loadingBarProgress}
        height={3}
        color="red"
        onLoaderFinished={() => onLoaderFinished()}
      /> */}
      <div
        className="find-friend-main-area-inner"
        // style={{ height: 800, overflow: "auto" }}
      >
        <InfiniteScroll
          dataLength={items.length}
          next={fetchImages}
          hasMore={hashMoreItem}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="ffmai-row">
            {items &&
              items.map((itm, i) => {
                if (user._id === itm._id) {
                  return null;
                }
                if (user.requestedUsers.find(rur => rur._id === itm._id)) {
                  return null;
                }
                if (user.friends.find(rur => rur._id === itm._id)) {
                  return null;
                }
                return (
                  <FindFriendItem
                    key={i}
                    addFollowHandler={() => addFollowHandler(itm._id) }
                    addFriendHandler={() => addFriendHandler(itm._id)}
                    item={itm}
                    idKey={i}
                    removeFriendHandler={() => {
                      removeFriendHandler(itm._id);
                    }}
                    removeFollowHandler={() => {
                      removeFollowHandler(itm._id);
                    }}
                    requestCheck={requestedToUsers.find(rtu => rtu === itm._id)}
                    loadingItemCheck={loadingItem === itm._id ? true : false}
                    loadingItemCheckFollow={loadingItemFollow === itm._id ? true : false}
                    requestCheckFollow={followTo.find(rtu => rtu._id === itm._id)}
                  />
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </main>
  );
};

export default FindFriendNewsFeedMiddle;
