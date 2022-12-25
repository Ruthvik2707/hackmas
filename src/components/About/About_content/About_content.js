import React from 'react'
import './About_content.css'
import image from './My_img.jpg'

function About_content() {
  return (
        <div class="content">
          <div class="text">
            <h1 class="heading">Me,Myslef and I</h1>
            <p class="alignment">I'm a web developer well versed in both front-end development and back-end development located in India.I am ambitious and passionate about my work and i classify myself as a creative developer</p>
            <p class="alignment">I'm a well organised person, problem solver and i am a good team player. Interested in Reading books that are based on fantasy </p>
            <p class="alignment"> I am well versed web development and looking forward to work in ambitious projects and meet positive people to work with</p>
            {/* <div>
            <a href=''><p class ="link">Lets make something special</p></a>
            </div> */}
          </div>
          <div class="info"><div class="image"><img  class="image" src={image} alt="My-_img"></img></div>
          <div class="education"><h1>Education</h1><p>Bachelor's degree in Electronics Engineering:7.5CGPA</p>
          <p>Intermediate:94%</p>
          <p>10th:9.5CGPA</p></div>
          <div class="mentions"><h1>Awards</h1>
          <p>Won a national level science project competition(2016)</p>
          <p> Won a University level project competition(Scientilla-2k18)</p>
          </div>
          </div>
        </div>
  )
}

export default About_content