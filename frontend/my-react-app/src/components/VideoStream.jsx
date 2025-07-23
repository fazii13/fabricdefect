import React from 'react';
import '../css/VideoStream.css'; // Import the CSS file

const VideoStream = () => {
  return (
    <div className="video-stream-container">
      <img src="http://localhost:8000/api/video-stream/" alt="Video Stream" className="video-stream-image" />
    </div>
  );
};

export default VideoStream;
