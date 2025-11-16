import React from 'react';

const Panel = (props) => {
  return (
    <div className="game-panel">
      <div className="game-info">
        <h2 className="game-title">{props.title}</h2>
        <p className="game-desc flexbox-root">
          {props.children ? props.children : props.description}
        </p>
      </div>
    </div>
  );
};

export default Panel;
