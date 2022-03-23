import React from 'react'
import Team from './components/Team'
import Lineup from './components/Lineup'

const App = () => {
  return (
    <div className="home" >
      <Lineup/>
      <Team/>
    </div>
  )
}

export default App