import React from 'react'
import LineupPlayer from './LineupPlayer';

export const Lineup = (props) => {
  return (
    <div className="lineup" >
        <LineupPlayer color={props.color} place="goalie" />
        <LineupPlayer color={props.color} place="player1" />
        <LineupPlayer color={props.color} place="player2" />
        <LineupPlayer color={props.color} place="player3" />
        <LineupPlayer color={props.color} place="player4" />
        <LineupPlayer color={props.color} place="player5" />
        <LineupPlayer color={props.color} place="player6" />
        <LineupPlayer color={props.color} place="player7" />
        <LineupPlayer color={props.color} place="player8" />
        <LineupPlayer color={props.color} place="player9" />
        <LineupPlayer color={props.color} place="player10" />
    </div>
  )
}

export default Lineup;