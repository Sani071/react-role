import React, { useState, useEffect } from "react";
import RequestSendFriendItem from "./RequestSendFriendItem";
import UserAxios from "../../../store/axios/UserAxios";
import LoadingBar from "react-top-loading-bar";
// import InfiniteScroll from "react-infinite-scroller";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../store/actions/userAction";
const RequestSendFriendNewsFeedMiddle = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [hashMoreItem, setHashMoreItem] = useState(true);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const [loadingItem, setLoadingItem] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    setLoadingBarProgress(10);
    UserAxios.get(`friend/allRequestSendUsers?pagination=12&page=${page}`)
      .then(result => {
        setLoadingBarProgress(60);
        let { users, totalQuantity } = result.data;
        // setItems(users);
        setItems(items.concat(users));

        setLoadingBarProgress(100);
        console.log(users);
        if (Number(totalQuantity) === Number(items.length + users.length)) {
          setHashMoreItem(false);
        }
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
  let { requestedToUsers } = user;
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

  const removeFriendHandler = async (toUserId) => {
    setLoadingItem(toUserId);
    let data = {
      createType: "friend",
      userId: user._id,
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

  console.log(items);
  return (
    <main className="news-feed-root-main find-friend-main-area">
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
                if (
                  user.friends.find(frd => frd === itm.requestReceiverUser._id)
                ) {
                  console.log(itm)
                  return null;
                }

                if (!user.requestedToUsers.find(rur => rur === itm.requestReceiverUser._id)) {
                  return null;
                }


                return (
                  <RequestSendFriendItem
                    key={i}
                    removeFriendHandler={() => {
                      removeFriendHandler(itm.requestReceiverUser._id);
                    }}
                    item={itm.requestReceiverUser}
                    idKey={i}

                    loadingItemCheck={
                      loadingItem === itm.requestReceiverUser._id ? true : false
                    }
                  />
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </main>
  );
};

export default RequestSendFriendNewsFeedMiddle;
