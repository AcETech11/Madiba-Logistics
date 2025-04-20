"use client"
import React from 'react'
import Header from './Header'
import Link from 'next/link'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaInstagram, FaFacebookF,FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setisOpen] = useState(false)
    const [pageOpen, setpageOpen] = useState(false)
  return (
    <>
    <Header/>
    <div className='Nav_container'>
        <div className='Nav_wrapper'>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/About">About Us</Link></li>
                    <li><Link href="/Service">Services</Link></li>
                    {/* <li onClick={()=> setpageOpen(!pageOpen)}><Link href="/">Pages{pageOpen ? <MdKeyboardArrowUp /> :<MdKeyboardArrowDown/> }</Link></li>
                    {pageOpen && <ul className='dropdown'> 
                        
                        <li onClick={()=> setpageOpen(false)}><Link href="/Pricing">Pricing</Link></li>
                    </ul>*/}
                    <li><Link href="/Tracking">Tracking</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <div className='Nav_links'>
                <ul>
                    <li><a href="/" target='_blank'><FaInstagram /></a></li>
                    <li><a href="/" target='_blank'><FaFacebookF /></a></li>
                    <li><a href="/" target='_blank'><FaXTwitter /></a></li>
                    <li><a href="/" target='_blank'> <FaLinkedinIn /></a></li>
                </ul>
                <button><Link href="/Quote">Request Quote</Link></button>
            </div>
            
            <span className='Mobile_menu' onClick={()=> setisOpen(!isOpen)}>{isOpen ? <IoClose /> :<IoMenu /> }</span>

           
        </div>
    {isOpen && <div className='Mobile_nav'>
                    <ul>
                        <li onClick={()=> setisOpen(false)}><Link href="/">Home</Link></li>
                        <li onClick={()=> setisOpen(false)}><Link href="/About">About Us</Link></li>
                        <li onClick={()=> setisOpen(false)}><Link href="/Service">Services</Link></li>
                        <li onClick={()=> setisOpen(false)}><Link href="/Tracking">Tracking</Link></li>
                        <li onClick={()=> setisOpen(false)}><Link href="/Contact">Contact</Link></li>
                    </ul>
                    </div>}
    </div>
    </>
  )
}

export default NavBar