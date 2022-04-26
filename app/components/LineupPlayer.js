import React, {useState} from 'react'

const LineupPlayer = (props) => {
  const rowStart = props.playerPosition.row;
  const rowEnd = props.playerPosition.row + 1;
  const columnStart = props.playerPosition.column;
  const columnEnd = props.playerPosition.column + 1;
  return (
    <div style={{backgroundColor: props.color,gridRowStart:rowStart,gridRowEnd:rowEnd,gridColumnStart:columnStart,gridColumnEnd:columnEnd}} className={props.place} >
        <h1></h1>
    </div>
  )
}

export default LineupPlayer;