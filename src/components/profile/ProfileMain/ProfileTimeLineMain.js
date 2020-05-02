import React from "react";
import PostFormArea from "../../newsFeed/newsFeedInner/PostFormArea";
import NewsFeedFilter from "../../newsFeed/newsFeedInner/NewsFeedFilter";
import Post from "../../newsFeed/posts/Posts";
export default function ProfileTimeLineMain() {
  return (
    <main className="news-feed-root-main profile-timeline-main-area">
      <PostFormArea />
      <NewsFeedFilter />
      <Post />
      {/* <LiveMainArea liveToggle={liveToggle} live={live} /> */}
    </main>
  );
}
