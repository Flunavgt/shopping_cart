/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactPlayer from 'react-player';

// const YoutubeVideo = () => (
//   <div className="youtube_container_video">
//     <ReactPlayer
//       playing
//       url="https://www.youtube.com/live/NiVMbP2y0Ho?feature=share"
//       className="react-player"
//       loop
//       muted
//       width="45vw"
//       height="55vh"
//       alt=""
//       controls={false}
//     />
//   </div>
// );

const YoutubeVideo = () => (
  <div className="youtube_container_video">
    <div className="container">
      <ReactPlayer
        playing
        url="http://www.youtube.com/live/NiVMbP2y0Ho?feature=share"
        className="react-player"
        controls={false}
      />
    </div>
  </div>
);

export default YoutubeVideo;
