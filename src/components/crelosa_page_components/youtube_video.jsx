/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

// const YoutubeVideo = () => (
//   <div className="youtube_container_video">
//     <ReactPlayer
//       playing
//       url="https://www.youtube.com/live/NiVMbP2y0Ho?feature=share"
//       className="react-player"
//       loop
//       muted
//       aspectRatio={9 / 16}
//       alt=""
//       controls={false}
//     />
//   </div>
// );

// eslint-disable-next-line react/prop-types
const YoutubeVideo = ({ aspectRatio }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (aspectRatio) {
      setHeight(window.innerWidth * aspectRatio);
    }
  }, [aspectRatio]);

  const playerStyle = {
    position: 'relative',
    width: '100%',
    height: `${height}px`,
  };

  return (
    <div style={playerStyle} className="youtube_container_video">
      <ReactPlayer play url="https://www.youtube.com/live/NiVMbP2y0Ho?feature=share" aspectRatio={9 / 16} />
      { console.log('Hola mundo') }
    </div>
  );
};

export default YoutubeVideo;
