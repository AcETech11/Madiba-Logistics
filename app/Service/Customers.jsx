import React from 'react'
import { FaSquare } from "react-icons/fa";

const Customers = () => {
  return (
    <div className='customer_container'>
        <div className="customer_wrapper">
            <h2>20+</h2>
            <div>
                <span><FaSquare/></span>
                <p>Our Location</p>
            </div>
        </div>
        <div className="customer_wrapper">
            <h2>500+</h2>
            <div>
                <span><FaSquare/></span>
                <p>Delivered Package</p>
            </div>
        </div>
        <div className="customer_wrapper">
            <h2>100+</h2>
            <div>
                <span><FaSquare/></span>
                <p>Satisfied Customers</p>
            </div>
        </div>
        <div className="customer_wrapper">
            <h2>20+</h2>
            <div>
                <span><FaSquare/></span>
                <p>Owned Vechicles</p>
            </div>
        </div>
    </div>
  )
}

export default Customers