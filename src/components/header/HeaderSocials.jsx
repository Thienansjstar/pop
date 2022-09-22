import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://github.com/Thienansjstar' target='blank'><FaGithub/></a>
        <a href='https://www.linkedin.com/feed/' target='blank'><BsLinkedin/></a>
    </div>

  )
}

export default HeaderSocials
