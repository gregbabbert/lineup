import React, { useState } from "react";
import Player from "./Player";

const Team = () => {
  const [team, setTeam] = useState("TEAM");
  const [teamPlayers, setTeamPlayers] = useState([
    {
      number: "15",
      name: "Sergio Ramos",
      position: "Centerback",
    },
    {
      number: "10",
      name: "Lionel Messi",
      position: "Centerforward",
    },
  ]);
  const [formPlayer, setFormPlayer] = useState([
    {
      number: 0,
      name: "",
      position: "",
    },
  ]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const newPlayer = {
      number: evt.target[2].value,
      name: evt.target[0].value,
      position: evt.target[1].value
    }
    setTeamPlayers([...teamPlayers, newPlayer])
  }

  return (
    <div className="team-section">
      <h3>{team}</h3>
      <h5>First 11</h5>
      {teamPlayers.map((player) => {
        return <Player key={player.name + player.number} number={player.number} name={player.name} position={player.position} />;
      })}
      <form id="player-form" onSubmit={handleSubmit} >
        <label htmlFor="player-name">Player Name:</label>
        <input name="player-name" />

        <label htmlFor="player-position">Position:</label>
        <input name="player-position" />

        <label htmlFor="number">Number:</label>
        <input name="number" />

        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default Team;
