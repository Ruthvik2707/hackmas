import React from 'react'
import './Navbar.css'
import git from './github.svg'
import linked from './linkedin.png'
import insta from './instagram.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div><div class="logo_info">
    <img  class="icon" src="https://img.icons8.com/?id=ucAIGFnVjuzs&size=2x" alt=""icon></img>
    <h1>Ruthvik</h1>
    <p>Web Developer</p>
    </div>
    <div class="nav-buttons-group">
    <Link class="idk" to="/socials"><div class="nav_buttons">Home</div></Link>
    <Link class="idk" to="/about"><div class="nav_buttons">About</div></Link>
    <Link class="idk" to="/myskill"><div class="nav_buttons">My skills</div></Link>
    <Link class="idk" to="/work"><div class="nav_buttons">work</div></Link>
    <Link class="idk" to="/contact"><div class="nav_buttons">contact</div></Link>
    <Link class="idk" to="/blogs"><div class="nav_buttons">Blogs</div></Link>
    <div class="nav_buttons"><a class="Link" target="_blank"  href="https://www.linkedin.com/in/ruthvik-k-s-720a52232/"><img class="social linkedin" src={linked}></img></a></div>
    <div class="nav_buttons"><a class="Link" target="_blank" href="https://github.com/Ruthvik2707"><img class=" social git_icon" src={git}></img></a></div>
    <div class="nav_buttons"><a class="Link" target="_blank" href="https://instagram.com/sunny.ruthvik?igshid=Mzc0YWU1OWY="><img class=" social insta_icon"src={insta}></img></a></div>
    </div>
    </div>
  )
}

export default Navbar