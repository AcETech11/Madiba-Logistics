"use client"
import React, { useState } from 'react'

const Shipping_form = () => {

        const [selectedType, setSelectedType] = useState('');
      
        const handleChange = (event) => {
          setSelectedType(event.target.value); // Update the selected value
        };
    const details = "Shippment Details e.g weight: if any Kg, Height: if any cm, Width: if any cm, Length: if any cm"
  return (
    <div className='Shipping_container'>
        <div className='Shipping_wrapper'>
            <h1>I'm Shipping as a {selectedType? selectedType : <p>....</p>}</h1>
            <div className='Shipping'>
                <div>
                    <input type="radio" name="shipmentType" value="business" id="business" onChange={handleChange} />
                    <label for="business">Business</label> 
                </div>
                <div>
                   <input type="radio" name="shipmentType" value="Private Person" id="personal" onChange={handleChange} />
                    <label for="personal" >Private Person</label> 
                </div>
                
            </div>
        <div className="Shipping_form_container">
            <div className='Shipping_form'>
                <div className='Shipping_Input'>
                    <div className='Shipping_form_From'>
                        <div className="shipping_country">
                           <label for="name">From</label> 
                           <input type="text" id="country" placeholder='Country'  required />
                            <p>This is your billing country/region</p> 
                        </div>
                        <input type="text" id="city"  placeholder='City*' required />
                    </div>
                          
                   
                </div>

                <div className='Shipping_Input'>
                    <div className='Shipping_form_To'>
                        <label for="name">To</label>
                        <input type="text" id="name" placeholder='Country'  name="country" required />
                    </div>
                        <input type="text" id="name" name="city" placeholder='City(Optional)*' />   
                </div>
                <textarea name="Shippment Details" id="details" placeholder={details}></textarea>
                <button className='Shipping_btn'>Quote Me</button>
                
            </div>

        </div>
            
        </div>
    </div>
  )
}

export default Shipping_form