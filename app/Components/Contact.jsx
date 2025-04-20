import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { SlCallEnd } from 'react-icons/sl'

const Contact = () => {
  return (
    <div className='contact_container'>
      <div className='contact_wrapper'>
        <div className='contact_title'>
            <h2 className='hightLight'>Contact</h2>
            <p className='touch'>Get In Touch</p>
            <p className='subtitle'>Thank you for your interest. Please fill out the form below, and we will promptly get in touch to discuss your warehousing, distribution, air, ocean freight, or other logistics requirements.</p>
          
                    <div className='contact'>
                        <BiLogoGmail className='contact_icon' />
                        <div>
                            <p>Email:</p>
                            <a href='mailto:Madibacargologistics@gmail.com' target='_blank'>Madibacargologistics@gmail.com</a>
                        </div>
                    </div>

                    <div className='contact'>
                        <SlCallEnd className='contact_icon' />
                        <div>
                            <p>Phone:</p>
                            <a href='tel:+2349164570537' target='_blank'>(+234) 916 457 0537</a>
                        </div>
                    </div>
        </div>
          <form>
            <div>
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
            </div>
            <div>
              <input type="text" placeholder='Phone Number*' />
              <input type="text" placeholder='City*' />
            </div>
            <textarea name="Message" placeholder='Your Message'></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
  )
}

export default Contact