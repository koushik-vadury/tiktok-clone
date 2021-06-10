import React, { useRef, useState } from "react";
import VideoFooter from "../videoFooter/VideoFooter";
import VideoSide from "../videoSide/VideoSide";

const Video = ({
  url,
  discription,
  channel,
  song,
  likes,
  shares,
  messages,
}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video_player"
        src={url}
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <VideoFooter discription={discription} channel={channel} song={song} />
      <VideoSide likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
