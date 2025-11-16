import React from 'react';

const TwitchPanel = ({ channelName }) => {
  return (
    <div className="support-panel">
      <div className="support-content">
        <h3>Watch Live</h3>
         <div style={{ marginTop: '12px' }}>
          <img
            src={`https://img.shields.io/twitch/status/${channelName}?style=for-the-badge&logo=twitch&logoColor=white`}
            alt="Twitch Status"
          />
        </div>
        <p>
          You can watch the game being developed live, see new features as they're added, 
          and interact with the developer in real time on Twitch.
        </p>
        <a
          href={`https://www.twitch.tv/${channelName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="support-btn"
        >
          🎮 Watch on Twitch
        </a>
       
      </div>
    </div>
  );
};

export default TwitchPanel;
