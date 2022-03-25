import React, { useState } from 'react'

const Team = () => {
  const [team, setTeam] = useState('TEAM')
  return (
    <div className="team-section" >
        <h3>{team}</h3>
        <h5>First 11</h5>
        <button></button>
    </div>
  )
}

export default Team