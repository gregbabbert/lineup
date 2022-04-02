import React, { useState } from 'react'
import Player from './Player'

const Team = () => {
  const [team, setTeam] = useState('TEAM')
  const [teamPlayers, setTeamPlayers] = useState([{
    number: '15',
    name: "Sergio Ramos",
    position: "Centerback"
  },
  {
    number: '10',
    name: "Lionel Messi",
    position: "Centerforward"
  }])
  const [formPlayer, setFormPlayer] = useState([{
    number: 0,
    name: '',
    position: ''
  }])
  return (
    <div className="team-section" >
        <h3>{team}</h3>
        <h5>First 11</h5>
        {teamPlayers.map(player => {
          return <Player number={player.number} name={player.name} position={player.position} />
        })}
        <button>+</button>
        
    </div>
  )
}

export default Team