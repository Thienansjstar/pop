import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'


const contacts = () => {
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4 id='email'>Email</h4>
            <h5 id='social__dissapear'>Thienansjstar@gmail.com</h5>
            <a href="mailto:thienansjstar@gmail.com"className='send__message' target='__blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4 id='phone__number'>Phone Number</h4>
            <h5 id='social__dissapear'>206-(883)-0263</h5>
            <a href="thienansjstar@gmail.com" className='send__message' target='__blank'>Send a message</a>
          </article>
         
        </div>

        <form actions="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Shoot</button>
        </form>
      </div>
    </section>
  )
}

export default contacts
