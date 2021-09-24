import React from 'react';
import ReactPlayer from 'react-player/youtube';

const ResponsivePlayer = props => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <ReactPlayer
        {...props}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          borderRadius: '4px',
        }}
      />
    </div>
  );
};

export default ResponsivePlayer;
