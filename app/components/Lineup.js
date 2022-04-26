import React, {useState} from 'react'
import LineupPlayer from './LineupPlayer';

function createFormation(players, formation) {
  const columnObj = {
    '1': [6],
    '2': [5,7],
    '3': [4,6,8],
    '4': [3,5,7,9],
    '5': [2,4,6,8,10]
  }
  const lines = formation.split('')
  const playerInput = [...players]
  if (lines.length === 3) {
    lines.forEach((lineNum, j) => {
      const num = parseInt(lineNum)
      const columnThree = [8,5,2]
      for (let i = 0; i < num; i++) {
        let player = playerInput.shift()
        player.row = columnThree[j];
        player.column = columnObj[lineNum][i]
      }
    })
  } else if (lines.length === 4) {
    lines.forEach((lineNum, j) => {
      const num = parseInt(lineNum)
      const columnFour = [8,6,4,2]
      for (let i = 0; i < num; i++) {
        let player = playerInput.shift()
        player.row = columnFour[j];
        player.column = columnObj[lineNum][i]
      }
    })
  } else if (lines.length === 5) {
    lines.forEach((lineNum, j) => {
      const num = parseInt(lineNum)
      const columnFive = [8,7,6,4,2]
      for (let i = 0; i < num; i++) {
        let player = playerInput.shift()
        player.row = columnFive[j];
        player.column = columnObj[lineNum][i]
      }
    })
  }
}

export const Lineup = (props) => {

  const [outfieldPlayers, setOutfieldPlayers] = useState([{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0},{row:0,column:0}])
  createFormation(outfieldPlayers, props.formation)

  return (
    <div className="lineup" >
        <LineupPlayer color={props.color} formation={props.formation} place="goalie" key="goalie" playerPosition={{row: 10, column:6}} />
        {outfieldPlayers.map((ele, i) => <LineupPlayer color={props.color} formation={props.formation} place={'player' + (i+1)} key={'player' + (i+1)} playerPosition={ele} />)}
    </div>
  )
}

export default Lineup;