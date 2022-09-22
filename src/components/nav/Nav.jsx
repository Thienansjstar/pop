import React from 'react'
import './nav.css' 
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{BiMessageSquareDetail} from 'react-icons/bi'
import{AiFillFolderOpen} from 'react-icons/ai'


const nav = () => {
  return(
    <nav className='nav__container'>
      <a href="#header"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><AiFillFolderOpen/></a>
      <a href="#contacts"><BiMessageSquareDetail/></a>
      

    </nav>
  )
}

export default nav