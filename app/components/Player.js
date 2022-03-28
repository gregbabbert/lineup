import React from "react";

const Player = (props) => {
  return (
    <div className="player">
      <p className="player-number" >{props.number}</p>
      <div className="player-words" >
        <p className="player-name" >{props.name}</p>
        <p className="player-position" >{props.position}</p>
      </div>
    </div>
  );
};

export default Player;
