/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactPlayer from 'react-player';

const YoutubeVideo = () => (
  <div className="youtube_container_video">
    <h1>Transmisión en directo Volcán de Fuego</h1>
    <div className="videoTitleyt">
      <div className="container">
        <ReactPlayer
          playing
          muted
          loop
          // url="http://www.youtube.com/live/NiVMbP2y0Ho?feature=share"
          url="https://youtu.be/20Wz5jKAYx0"
          className="react-player"
          controls={false}
        />
      </div>
    </div>
  </div>
);

export default YoutubeVideo;
