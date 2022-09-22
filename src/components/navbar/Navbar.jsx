import React from 'react'
import { MenuItems } from './Menuitems'
import './navbar.css'

const Navbar = () => {
    
  return (
    <nav className= "navbar__items">
      
        <div className="menu__icon">
        
        </div>
        <ul className='nav__menu'>
            {MenuItems.map((item, index) => {
                    return(
                        <li key={index}> 
                            <a className={item.cName} href={item.url}>
                            {item.title}

                             </a>
                        </li>
                    )
            })}
            
        </ul>
    </nav>
  )
}

export default Navbar
