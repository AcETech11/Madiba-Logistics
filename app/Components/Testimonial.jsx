"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from './db';
import Image from 'next/image';
import { IoStar } from "react-icons/io5";


const Testimonial = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              infinite: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              infinite: true,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='Testimonial_container'>
        <div className='Testimonial_wrapper'>
            <div className='Testimonial_title'>
                <h2 className='hightLight'>Testimonial</h2>
                <p className='hightLight_subtitle'>What Our Client's Say</p>
            </div>
            <div className='Testimonial'>
                <div className="slider-container">
                    <Slider {...settings}>
                        {testimonial && testimonial.map((items, index)=>(
                            <div key={index} className='Testimonial_item'>
                                <div className='Testimonial_item_text'>
                                    <div className='Testimonial_content'>
                                        <Image 
                                        src={items.image}
                                         alt={items.name}
                                         width={300}
                                         height={300}
                                         priority
                                         />
                                         <div className='Testimonial_name'>
                                            <h4>{items.name}</h4>
                                            <p>{items.company}</p>  
                                         </div>
                                    </div>
                                    <p>{items.details}</p>
                                     <div className='Testimonial_rating'>
                                        <IoStar/>
                                        <IoStar/>
                                        <IoStar/>
                                        <IoStar/>
                                        <IoStar/>
                                     </div>
                                </div>
                            </div>  // End of testimonial_item div
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial