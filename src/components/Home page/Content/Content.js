import React from 'react'
import './Content.css'
import tape from './tape.png';
import { Link } from 'react-router-dom';

function Content() {
  return (
    <div class="contents"><div>
    <div class="text-msg">
        <h1 class="Text_msg left">Hi,</h1>
        <h1 class="Text_msg left">I'm Ruthvik,</h1>
        <h1 class="Text_msg left">Web developer</h1>
        <div class="contact_info"><Link class="idk" to="/contact">contact me!</Link></div>
    </div>
    <div class="clip">Imagination</div>
    <div class="clip"><span>the only limitation</span></div>
    </div>
    <div class="tape"><img src={tape} alt="tape"></img></div>
    </div>)
}

export default Content