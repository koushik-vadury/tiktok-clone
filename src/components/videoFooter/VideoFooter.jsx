import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = ({ channel, discription, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{discription}</p>
        <MusicNoteIcon className="videoFooter_icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <p>{song}</p>
            </>
          )}
        </Ticker>
      </div>
    </div>
  );
};

export default VideoFooter;
