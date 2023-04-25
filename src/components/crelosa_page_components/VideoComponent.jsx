import React from 'react';
import './vids.css';

const VideoComponent = () => (
  <div className="banner-container">
    <div className="video-container">
      <div className="video-wrapper">
        <video className="video" autoPlay loop muted>
          <source src="/video/Ht.mp4" type="video/mp4" />
        </video>
        <div className="text-overlay">
          <h1>Crelosa</h1>
        </div>
      </div>
    </div>
  </div>
);

export default VideoComponent;
