import React from 'react'
import Contact_hero from './Contact_hero'

const page = () => {
  return (
    <div>
         <div className='page_hero_container'>
            <div className='page_hero_image'>
                <img src="/carousel-2.jpg" alt="About Image" />
            </div>
            <div className='page_hero_content'>
                <h3>Contact</h3>
                <p>Get In Touch</p>
            </div>

        </div>
        <Contact_hero/>
    </div>
  )
}

export default page