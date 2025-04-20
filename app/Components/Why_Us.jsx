import Image from 'next/image'
import React from 'react'
import { FaMoneyBill } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";


const Why_Us = () => {
  return (
    <div className='Why_Us_container'>
        <div className='Why_Us_wrapper'>
            <div className='Why_Us_BgImage'>
                <Image
                src="/premium_photo-1661932036915-4fd90bec6e8a.avif"
                alt="Premium Photo"
                width={320}
                height={600}
                quality={100}
                priority
                />
            </div>
            <div className='Why_Us_content'>
                <div className='Why_Us_Body'>
                <div className='Why_Us'>
                    <p className='hightLight'>Why Us</p>
                    <p className='hightLight_subtitle'>Providing complete logistics services worldwide.</p>
                    <p>Our goal is to deeply understand their experiences, requirements, pricing considerations, and what matters most to them and their customers.</p>
                    <p>Over the years, we’ve formed trusted relationships with our clients by staying connected and showing that we care.</p>
                    <div className='time'>
                        <span>
                            <LuTimer className='Icons' />
                        </span>
                        <p>
                            Delivery On Time
                        </p>
                    </div>

                    <div className='time'>
                        <span>
                            <FaMoneyBill className='Icons' />
                        </span>
                        <p>
                            Travel Cost Optimization
                        </p>
                    </div>
                </div>

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
            </div>
            </div>
        </div>
    </div>
  )
}

export default Why_Us