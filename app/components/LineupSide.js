import React, {useState} from 'react'
import Navbar from './Navbar';
import Lineup from './Lineup';

const LineupSide = () => {
  const [playerColor, setPlayerColor] = useState('red')
  return (
    <div className='lineup-side' >
        <Navbar setPlayerColor={setPlayerColor} />
        <Lineup color={playerColor} />
    </div>
  )
}

export default LineupSide;