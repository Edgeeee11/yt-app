import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VidoeDetail";
import useVideos from "../Hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, naOtpravkuVvedennoyFormyVipolny] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  });

  return (
    <div className="ui container">
      <SearchBar naOtpravkuVvedennoyFormy={naOtpravkuVvedennoyFormyVipolny} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;