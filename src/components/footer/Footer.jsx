import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'
const footer = () => {
  return (
    <footer>

     

      <ul className='permalinks'>
          <li><a href='#header'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#portfolio'>Projects</a></li>
          <li><a href='#contacts'>Contact Me</a></li>
          
          

      </ul>   
      <div className="footer__socials">
          <a href="https://www.linkedin.com/feed/"><FaFacebookF/></a>
          <a href="https://www.linkedin.com/feed/"><AiFillInstagram/></a>
          <a href="https://www.linkedin.com/feed/"><AiFillLinkedin/></a>
          <a href="https://www.linkedin.com/feed/"><FaGithubSquare/></a>

      
      </div>

      <div className="footer__copyright">
        <small>&copy;. Thien-An Tran. All rights reserved</small>
      </div>
 </footer>
  )
}

export default footer