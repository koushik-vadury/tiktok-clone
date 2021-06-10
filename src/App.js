import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/video/Video";
import v1 from "./tiktokVideo/v1.mp4";
import v2 from "./tiktokVideo/v2.mp4";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://tiktok-backend-mern-koushik.herokuapp.com/v2/posts",
        {
          method: "GET",
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      // console.log(data);
      return setVideos(data);
    };
    // console.log(videos[3]?.url);
    fetchPosts();

    // eslint-disable-next-line
  }, []);
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url={videos[3]?.url}
          discription={videos[3]?.discription}
          channel={videos[3]?.channel}
          song={videos[3]?.song}
          likes={videos[3]?.likes}
          shares={videos[3]?.shares}
          messages={videos[3]?.messages}
        />
        <Video
          url={videos[2]?.url}
          discription={videos[2]?.discription}
          channel={videos[2]?.channel}
          song={videos[2]?.song}
          likes={videos[2]?.likes}
          shares={videos[2]?.shares}
          messages={videos[2]?.messages}
        />
      </div>
    </div>
  );
}

export default App;
