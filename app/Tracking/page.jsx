import React from 'react'

const page = () => {
  return (
        <div className="tracking_container">
            <div className="tracking_title">
                <h4>Tracking My Parcel</h4>
                <p>Enter your tracking number below to monitor the status of your delivery.</p>
                <p>Your tracking number begins with 'GB' and consists of 12 digits</p>
            </div>
            <div className="tracking_info">
               <input type="text" placeholder="Enter tracking number" />
                <button className='tracking_btn'>Track</button> 
            </div>
                
        </div>
  )
}

export default page