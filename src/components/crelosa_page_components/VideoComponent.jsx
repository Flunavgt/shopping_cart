import React from 'react';
import './vids.css';

const VideoComponent = () => (
  <div className="banner-container">
    <video className="video" autoPlay loop muted>
      <source src="/video/Ht.mp4" type="video/mp4" />
    </video>
  </div>
);

export default VideoComponent;
