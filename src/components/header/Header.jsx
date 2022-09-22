import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import 'animate.css'






const header = () => {

  
  return (
    <header id='header'>
      
      <div className="container header__container">
        
        
      <h1>Hey! My name is Thien-An</h1>
      <h5 className="text-light"> I am a full stack developer who loves building fun projects </h5>
          
       
       

         <HeaderSocials/>

        


        
      </div>
     
    </header>
    
  )
}

export default header