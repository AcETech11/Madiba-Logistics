import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='aboutUs_container'>
        <div className='aboutUs_wrapper'>
        <div className='Why_us_Right'>
                    <Image
                    src="/6377b4ed0ea43c25990c9d37_2.jpg"
                    alt="Cargo Truck"
                    width={500}
                    height={500}
                    quality={100}
                    priority
                    className='truckImage'
                    />
                    <div className='Why_Us_position'>
                        <Image
                        src="/depot_delivery_1.jpg"
                        alt="Delivery Photo"
                        width={200}
                        height={200}
                        quality={100}
                        priority
                        />
                    </div>
                </div>
            <div className='aboutUs_content'>
                <h4>About Us</h4>
                <p className='aboutUs_title'>Introduction to Our Company</p>
                <p className='aboutUs_text'>We specialize in providing efficient and reliable logistics services tailored to meet your unique needs. Our team of experts ensures seamless transportation and delivery, from planning to execution. With a commitment to quality, we focus on optimizing supply chains, reducing costs, and delivering exceptional customer experiences. Whether it's local or global logistics, we guarantee timely, secure, and transparent service every step of the way..</p>
                <button>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs