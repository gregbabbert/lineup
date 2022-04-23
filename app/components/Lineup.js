import React from 'react'
import LineupPlayer from './LineupPlayer';

export const Lineup = (props) => {
  return (
    <div className="lineup" >
        <LineupPlayer color={props.color} formation={props.formation} place="goalie" />
        <LineupPlayer color={props.color} formation={props.formation} place="player1" />
        <LineupPlayer color={props.color} formation={props.formation} place="player2" />
        <LineupPlayer color={props.color} formation={props.formation} place="player3" />
        <LineupPlayer color={props.color} formation={props.formation} place="player4" />
        <LineupPlayer color={props.color} formation={props.formation} place="player5" />
        <LineupPlayer color={props.color} formation={props.formation} place="player6" />
        <LineupPlayer color={props.color} formation={props.formation} place="player7" />
        <LineupPlayer color={props.color} formation={props.formation} place="player8" />
        <LineupPlayer color={props.color} formation={props.formation} place="player9" />
        <LineupPlayer color={props.color} formation={props.formation} place="player10" />
    </div>
  )
}

export default Lineup;