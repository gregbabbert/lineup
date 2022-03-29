import React from 'react'
import LineupPlayer from './LineupPlayer';

export const Lineup = () => {
  return (
    <div className="lineup" >
        <LineupPlayer place="goalie" />
        <LineupPlayer place="player1" />
        <LineupPlayer place="player2" />
        <LineupPlayer place="player3" />
        <LineupPlayer place="player4" />
        <LineupPlayer place="player5" />
        <LineupPlayer place="player6" />
        <LineupPlayer place="player7" />
        <LineupPlayer place="player8" />
        <LineupPlayer place="player9" />
        <LineupPlayer place="player10" />
    </div>
  )
}

export default Lineup;