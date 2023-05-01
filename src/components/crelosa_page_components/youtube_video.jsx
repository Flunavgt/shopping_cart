/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactPlayer from 'react-player';

const YoutubeVideo = () => (
  <div className="youtube_container_video">
    <div className="videoTitleyt">
      {/* <h1>Hytera presentado en pelicula Rapido y Furioso</h1> */}
      <h1 className="youtube_main_title">
        Donde
        <br className="br_display_none" />
        quiera que
        <br className="br_display_none" />
        vayas
      </h1>
      <div className="react_player_container">
        <ReactPlayer
          playing
          muted
          loop
          // url="http://www.youtube.com/live/NiVMbP2y0Ho?feature=share"
          // url="https://youtu.be/20Wz5jKAYx0"
          // url="/video/Ht2.mp4"
          url="https://youtu.be/vsjoqHvXZPc"
          className="react-player"
          controls={false}
        />
      </div>
    </div>
  </div>
);

export default YoutubeVideo;
