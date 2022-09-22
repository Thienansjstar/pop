import React from 'react'
import './portfolio.css'
import video1 from '../../assets/Video1.mp4'
import video2 from '../../assets/Video2.mp4'
import video3 from '../../assets/Video3.mp4'



const portfolio = () => {
  return (
    
    <section id='portfolio'>
     <h5>My works</h5>
     <h2>Projects</h2>

     <div className="container portfolio__container">

       <article className='portfolio__items'>
          <div className="portfolio__item-video1"> 
          <video src={video1} autoPlay loop/>
          
          </div>
            <h3>JumpMan</h3>
            <h4>C#, Unity Engine</h4>
           <div className='portfolio__link'>
            <a href="https://github.com/Thienansjstar/Jump-man" className='btn' target='__blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary'
             target='__blank'>live demo</a>
            </div>
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item-video1"> 
          <video src={video2} autoPlay loop/>
          
          </div>
            <h3>Calcurush</h3>
            <h4>React, Phaser, Heroku, </h4>
           <div className='portfolio__link'>
            <a href="https://github.com/Thienansjstar/Jump-man" className='btn' target='__blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary'
             target='__blank'>live demo</a>
            </div>
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item-video1"> 
          <video src={video3} autoPlay loop/>
          
          </div>
            <h3>This website</h3>
            <h4>React</h4>
           <div className='portfolio__link'>
            <a href="https://github.com/Thienansjstar/tt" className='btn' target='__blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary'
             target='__blank'>live demo</a>
            </div>
        </article>
        
        

     
     </div>
  </section>
  )
}

export default portfolio