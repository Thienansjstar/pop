import React from 'react'
import './experience.css'

import {DiCss3Full} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {DiJava} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {SiJson} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {DiReact} from 'react-icons/di'
import {DiNodejsSmall} from 'react-icons/di'
import {CgGames} from 'react-icons/cg'
import {SiMicrosoftexcel} from 'react-icons/si'
import { DiHeroku } from 'react-icons/di'
import {SiUnity} from 'react-icons/si'
import {FaMusic} from 'react-icons/fa'

const experience = () => {
  return (
    <section id="experience">
      
      <h5>My skills</h5>
      <h2>Experience</h2>

      

      <div className="container experience__container">
        <div className="expereience__frontend">
            <h3>Languages</h3>
           
            <div className="experience__content">
             
              <article className="experience__details">
                <DiCss3Full className='experience__details-icon'/>
                <div>CSS3</div>
              </article>
              <article className="experience__details">
              <AiFillHtml5 className='experience__details-icon'/>
                <div>HTML5</div>
              </article>
              <article className="experience__details">
              <SiCsharp className='experience__details-icon'/>
                <div>C#</div>
              </article>
              <article className="experience__details">
              <DiJava className='experience__details-icon'/>
                <div>JAVA</div>
              </article>
              <article className="experience__details">
              <SiJavascript className='experience__details-icon'/>
                <div>JAVA SCRIPT</div>
              </article>
              <article className="experience__details">
              <SiJson className='experience__details-icon'/>
                <div>JSON</div>
              </article>
              
             </div>
       </div>

          <div className="experience__backend">
            <h3>Frame Works and Libraries</h3>
              <div className="experience__content">

              <article className="experience__details">
              <BsFillBootstrapFill className='experience__details-icon'/>
                <div>BOOT STRAP</div>
              </article>
              <article className="experience__details">
              <DiReact className='experience__details-icon'/>
                <div>REACT</div>
              </article>
              <article className="experience__details">
              <DiNodejsSmall className='experience__details-icon'/>
                <div>NODE.JS</div>
              </article>
              <article className="experience__details">
              <CgGames className='experience__details-icon'/>
                <div>PHASER JS</div>
              </article>
            </div>
         </div>
         <div className="experience__backend">
            <h3>Other Technologies</h3>
              <div className="experience__content">

              <article className="experience__details">
              <FaMusic className='experience__details-icon'/>
                <div>LOGIC PRO</div>
              </article>
              <article className="experience__details">
              <SiUnity className='experience__details-icon'/>
                <div>UNITY</div>
              </article>
              <article className="experience__details">
              <DiHeroku className='experience__details-icon'/>
                <div>HEROKU</div>
              </article>
              <article className="experience__details">
              <SiMicrosoftexcel className='experience__details-icon'/>
                <div>Microsoft Excel</div>
              </article>
            </div>
         </div>


         
       </div>
      
      </section>
  )
}

export default experience