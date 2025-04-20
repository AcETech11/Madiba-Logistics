import React from 'react'
import Service_hero from './Service_hero'
import Service_why_choose_us from './service_why_choose_us'
import Testimonial from '../Components/Testimonial'
import Customers from './Customers'

const page = () => {
  return (
    <>
        <Service_hero />
        <Service_why_choose_us/>
        <Testimonial/>
        <Customers/>
    </>
  )
}

export default page