import React from 'react';
import "./Roadmap.scss";
const RoadmapPanel = ({ milestones }) => {
  const total = milestones.length;
  
  let completedCount = milestones.filter(m => m.status.toLowerCase() === 'completed'||m.status.toLowerCase()=="pending").length;

  
  const progressPercent = (completedCount / total) * 100;

  return (
    <div className="roadmap-panel">
      <h3>Project Roadmap</h3>
      <div className="roadmap-vertical">
        <div className="vertical-line">
          <div className="vertical-line-fill" style={{ height: `${progressPercent}%` }}></div>
        </div>
        {milestones.map((item, index) => (
          <div key={index} className="roadmap-node">
            <div className={`node-circle ${item.status.toLowerCase()}`}></div>
            <div className="node-text">
              <span className="node-status">{item.status}</span>
              <span className="node-description">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapPanel;
