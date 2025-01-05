import React from "react";
import { infosysaward,poster } from "../assets";
import "./AwardVideo.css";

const AwardVideo = () => {
  return (
    <div className="video-container">
      <video 
        src={infosysaward} // Update with the path to your video
        controls 
        poster={poster}
        className="video-player"
        alt = "Video not available"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default AwardVideo;
