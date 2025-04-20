import React from 'react'
import { GiCargoCrate } from "react-icons/gi";
import { BiLogoGmail } from "react-icons/bi";
import { SlCallEnd } from "react-icons/sl";
import { MdLogin } from "react-icons/md";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='Header_container'>
        <div className='Header_wrapper'>
            <div className='Logo'>
                <span><GiCargoCrate size="3em" color='#c5942f' /></span>
                <h1>Madiba Cargo  Logistics</h1>
            </div>
            <div className='Header_contant'>
                <div className='Header_contact'>
                    <span><BiLogoGmail /></span>
                    <div>
                        <p>Email:</p>
                        <a href='mailto:Madibacargologistics@gmail.com' target='_blank'>Madibacargologistics@gmail.com</a>
                    </div>
                </div>

                <div className='Header_contact'>
                    <span><SlCallEnd /></span>
                    <div>
                        <p>Phone:</p>
                        <a href='tel:+2349164570537' target='_blank'>(+234) 916 457 0537</a>
                    </div>
                </div>
            </div>
            {/* <button><Link href='/Login'>LogIn<span><MdLogin /></span></Link></button> */}
        </div>
    </div>
  )
}

export default Header