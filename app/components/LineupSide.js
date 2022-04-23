import React, {useState} from 'react'
import Navbar from './Navbar';
import Lineup from './Lineup';

const LineupSide = () => {
  const [playerColor, setPlayerColor] = useState('red')
  const [formation, setFormation] = useState('442')
  return (
    <div className='lineup-side' >
        <Navbar setPlayerColor={setPlayerColor} setFormation={setFormation} />
        <Lineup color={playerColor} formation={formation} />
    </div>
  )
}

export default LineupSide;