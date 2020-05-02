import React, { useState } from "react";

import NewsFeedFilter from "./newsFeedInner/NewsFeedFilter";
import PostFormArea from "./newsFeedInner/PostFormArea";
import LiveMainArea from "./Live/LiveMainArea";
const NewsFeedMiddle = () => {
  const [live, setLive] = useState(false);

  const liveToggle = () => {
    setLive(!live);
  };

  return (
    <main className="news-feed-root-main">
      <PostFormArea liveToggle={liveToggle} />
      <NewsFeedFilter />

      <LiveMainArea liveToggle={liveToggle} live={live} />
    </main>
  );
};

export default NewsFeedMiddle;
