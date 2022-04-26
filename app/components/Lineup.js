import React, {useState} from 'react'
import LineupPlayer from './LineupPlayer';

function createFormation(players, formation) {
  const one = [6]
  const two = [5,7]
  const three = [4,6,9]
  const four = [3,5,7,9]
  const five = [2,4,6,8,10]
  const lines = formation.split('')
  const playerInput = [...players]
  if (lines.length === 3) {
    lines.forEach(lineNum => {
      const num = parseInt(lineNum)
      const columnThree = [2,5,8]
      for (let i = 0; i < num; i++) {
        let player = playerInput.shift()
        player.row = 
      }
    })
  } else if (lines.length === 4) {

  } else if (lines.length === 5) {

  }
}

export const Lineup = (props) => {

  const [outfieldPlayers, setOutfieldPlayers] = useState([{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0}])
  createFormation(outfieldPlayers, props.formation)

  return (
    <div className="lineup" >
        <LineupPlayer color={props.color} formation={props.formation} place="goalie" />
        {outfieldPlayers.map((ele, i) => <LineupPlayer color={props.color} formation={props.formation} place={'player' + (i+1)} />)}
    </div>
  )
}

export default Lineup;