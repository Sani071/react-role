import React, { useState, useEffect } from "react";
import RequestFriendItem from "./RequestFriendItem";
import UserAxios from "../../../store/axios/UserAxios";
import LoadingBar from "react-top-loading-bar";
// import InfiniteScroll from "react-infinite-scroller";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector, connectAdvanced } from "react-redux";
import { setUser } from "../../../store/actions/userAction";
const RequestFriendNewsFeedMiddle = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [hashMoreItem, setHashMoreItem] = useState(true);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const [loadingItem, setLoadingItem] = useState("");
  const [loadingDeleteItem, setLoadingDeleteItem] = useState("");
  const [countDelete, setCountDelete] = useState(1);
  const [countDeleteCheck, setCountDeleteCheck] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    setLoadingBarProgress(10);
    UserAxios.get(`friend/allRequestedUsers?pagination=12&page=${page}`)
      .then(result => {
        setLoadingBarProgress(60);
        let { users, totalQuantity } = result.data;
        // setItems(users);
        setItems(items.concat(users));

        setLoadingBarProgress(100);
        console.log(totalQuantity, items.length);
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
  const addFriendHandler = async (friendId, fromUserId) => {
    setLoadingItem(fromUserId);
    let data = {
      createType: "friend",
      friendId,
      fromUserId,
      userId: user._id
    };

    try {
      let result = await UserAxios.post("friend/createFriend", data);
      let { user } = result.data;
      dispatch(setUser(user));
      setLoadingItem("");
    } catch (err) {
      setLoadingItem("");
    }
  };
  const removeFriendHandler = async (toUserId) => {
    setLoadingDeleteItem(toUserId);
    let data = {
            createType: "friend",
            userId: toUserId,
            toUserId: user._id
          };
         try {

            let result = await UserAxios.patch("friend/cancelFriendRequest", data);
            let { user } = result.data;
            dispatch(setUser(user));
            setLoadingDeleteItem("");
          } catch (err) {
            setLoadingDeleteItem("");
          }


    // let count = 1
    // var myVar = setInterval(async function () {
    //   if (!toUserId) {
    //     clearInterval(myVar)
    //     return
    //   }
    //   if (count > 8) {
    //     clearInterval(myVar)
    //     if (countDeleteCheck){
    //       let data = {
    //         createType: "friend",
    //         userId: toUserId,
    //         toUserId: user._id
    //       };
    //       try {
            
    //         let result = await UserAxios.patch("friend/cancelFriendRequest", data);
    //         let { user } = result.data;
    //         dispatch(setUser(user));
    //         setLoadingDeleteItem("");
    //       } catch (err) {
    //         setLoadingDeleteItem("");
    //       }
    //     }
        
    //   }
    //   count += 1
    //   setCountDelete(count)
    //   console.log(234)
    // }, 1000);

    
  }

  const cancelRemoveFriendHandler = () => {
    clearInterval(removeFriendHandler(false))
    setCountDeleteCheck(false)
  }
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
        {/* {countDelete} */}
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
                if (user.friends.find(frd => frd._id === itm.requestedUser._id)) {
                  return null;
                }

                if (!user.requestedUsers.find(ru => ru === itm.requestedUser._id)) {
                  return null
                }

                console.log(user.requestedUsers)
                return (
                  <RequestFriendItem
                    key={i}
                    item={itm.requestedUser}
                    idKey={i}
                    addFriendHandler={() => {
                      addFriendHandler(itm._id, itm.requestedUser._id);
                    }}
                    removeFriendHandler={() => {
                      removeFriendHandler(itm.requestedUser._id);
                    }}
                    cancelRemoveFriendHandler={cancelRemoveFriendHandler}
                    loadingItemCheck={
                      loadingItem === itm.requestedUser._id ? true : false
                    }

                    loadingDeleteItemCheck={
                      loadingDeleteItem === itm.requestedUser._id ? true : false
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

export default RequestFriendNewsFeedMiddle;
