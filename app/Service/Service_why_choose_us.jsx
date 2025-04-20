import Image from 'next/image'
import React from 'react'
import { FaBox, FaEnvira, FaHelmetSafety } from "react-icons/fa6";

const Service_why_choose_us = () => {
  return (
    <div className="service_container">
        <div className="service_wrapper">
            <div className='About_what_we_do'>
                <p className='hightLight'>The Features</p>
                <p className='About_hightLight_subtitle'>Why Choose Us?</p> 
            </div>
        <div className="service_WCU_content">
            <div className='Why_us_Right'>
                    <Image
                    src="/about.jpg"
                    alt="Cargo Truck"
                    width={500}
                    height={500}
                    quality={100}
                    priority
                    className='truckImage'
                    />
                </div>

                <div className='service_WCU_right'>
                    <div className='WCU_right_component'>
                        <FaBox className='service_icons'/>
                        <div>
                            <p className='service_WCU'>WareHousing Stroage</p>
                            <p>A top specialist assists in cargo reporting and visibility, working alongside professionals in charge of the supply chain.</p>
                        </div>
                    </div>

                    <div className='WCU_right_component'>
                        <FaEnvira className='service_icons' />
                        <div>
                            <p className='service_WCU'>Care Free Enviroment</p>
                            <p>As the premier regional carrier for the wine shipping industry, we offer a level of service that surpasses national carriers.</p>
                        </div>
                    </div>

                    <div className='WCU_right_component'>
                        <FaHelmetSafety className='service_icons' />
                        <div className='service_paragraph'>
                            <p className='service_WCU'>Security & Excellence</p>
                            <p>State-of-the-art packaging and computer-controlled storage solutions are provided to guarantee the success of your business</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Service_why_choose_us