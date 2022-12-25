import React from 'react'
import Content from '../Content/Content'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import animate from '../Cursor/cursor_util'

function Home() {
  return (
    <div >
        <div class="main">
        <Navbar />
        <Content />
        {animate()}
        </div>
    </div>
  )
}

export default Home