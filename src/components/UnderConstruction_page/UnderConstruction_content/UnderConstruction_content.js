import React from 'react'
import construct from './construct.svg'
import './UnderConstruction_content.css'
import hammer from './hammer-board.svg'
import ham from './hammer.png'

function UnderConstruction_content() {
  return (
    <div class="construct">
      {/* <img class="img" src={construct} alt="construct"></img> */}
    <img class="hammer" src={hammer} alt="hammer-board"></img>
    {/* <img class ="ham" src={ham} alt="ham"></img> */}
    <div class="thingy">
      <div class="good"><h1>Good things are coming soon!</h1></div>
      <div class="child"><p>This particular part of the page is Under Construction</p></div>
      <div class="child"><p>If u have any specific ideas let me know</p></div>
    </div>
    </div>
  )
}

export default UnderConstruction_content