import React from 'react'
import './about.css'

import{FaAward} from 'react-icons/fa'


const about = () => {
  return (
   <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
        
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>University</h5>
            <h5>Washington</h5>
            <small>Computer Science</small>
          </article>  

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Coding</h5>
            <h5>experience</h5>
            <small>4 years</small>
          </article>   

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Work Experience</h5>
            <small>1 year</small>
          </article>  
        </div>
        <p> 
      Hello! 
      I am a student at the University of Washington majoring in computer
      science. I hope to change the world with techology. I want to diversify 
      the the tech-industry by bringing people from all backgrounds. I enjoy coding 
      especially developing video games. I have been coding for 4+ years and have 
      knowledge of many different languages and frameworks.
      </p>
      <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
      </div>
      
      
      
      
    
    </div>
  </section>
  )
}

export default about