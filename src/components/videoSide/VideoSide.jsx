import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import AlbumIcon from "@material-ui/icons/Album";

const VideoSide = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div className="videoSideBar">
        <div className="videoSideBar_Button">
          {liked ? (
            <FavoriteIcon
              fontSize="large"
              onClick={(e) => {
                setLiked(false);
              }}
            />
          ) : (
            <FavoriteBorderIcon
              fontSize="large"
              onClick={(e) => {
                setLiked(true);
              }}
            />
          )}
          <p> {liked ? parseInt(likes) + 1 : likes}</p>
        </div>

        <div className="videoSideBar_Button">
          <MessageIcon fontSize="large" />
          <p>{messages}</p>
        </div>
        <div className="videoSideBar_Button">
          <ShareIcon fontSize="large" />
          <p>{shares}</p>
        </div>
        <div className="videoSideBar_Button">
          <AlbumIcon fontSize="large" className="rounded" />
        </div>
      </div>
    </>
  );
};
export default VideoSide;
