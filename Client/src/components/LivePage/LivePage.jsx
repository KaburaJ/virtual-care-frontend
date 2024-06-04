import React, { useRef } from 'react';
import './LivePage.css';
import Navbar from '../navbar/navbar';

const LivePage = () => {
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="iframe-container">
        <iframe
          ref={iframeRef}
          title="Embedded EJS App"
          src="http://localhost:5030" // Replace with the actual URL of your EJS application
          className="embedded-iframe"
          onLoad={handleIframeLoad}
        />
      </div>
    </>
  );
};

export default LivePage;
