import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegCopyright, FaXTwitter } from 'react-icons/fa6'
import { GiCargoCrate } from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_wrapper'>
        <div className='footer_image'>
          <img src="Hero 1920x675_AboutPOB.jpg" alt="footerImage" />
        </div>
        <footer>
          <div className='footer_left'>
            <div className='FooterLogo'>
                <span><GiCargoCrate size="3em" color='#c5942f' /></span>
                <h1>Madiba Cargo  Logistics</h1>
            </div>
            <div className='footer_Links'>
              <ul>
                <li><a href="/" target='_blank'><FaInstagram /></a></li>
                <li><a href="/" target='_blank'><FaFacebookF /></a></li>
                <li><a href="/" target='_blank'><FaXTwitter /></a></li>
                <li><a href="/" target='_blank'> <FaLinkedinIn /></a></li>
              </ul>
              <p><FaRegCopyright /> 2022 Madiba Cargo Logistics. All rights reserved.</p>
            </div>
          </div>

          <div className='footer_middle'>
            <div className='footer_Nav'>
              <h3>Pages</h3>
              <ul>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Services">Services</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
                <li><Link href="/Tracking">Tracking</Link></li>
              </ul>
            </div>

            <div className='footer_sub'>
              <h3>Subscribe</h3>
              <div>
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

        </footer>
      </div>
    </div>
  )
}

export default Footer