import React from 'react'
import services from '../Components/db'

const About_Why_Us = () => {
  return (
    <div className='About_what_we_do_container' style={{backgroundColor: "#fff"}}>
      <div className='About_what_we_do_wrapper'>
        <div className='About_what_we_do'>
          <p className='hightLight'>What We Do</p>
           <p className='About_hightLight_subtitle'>Our Logistics Solutions</p> 
        </div>
        <div>
          <div className='About_grid_container'>
            {services && services.length > 0 ? (
              services.map((items, index) => (
                <div key={index} className='About_what_we_do_content'>
                  <div className='icon'>{items.icon}</div> {/* Correct: items.icon */}
                  <div className='icon_content'>
                    <h4>{items.title}</h4>
                    <p>{items.content}</p>
                  </div>
                  
                </div>
              ))
            ) : (
              <p>Loading ....</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_Why_Us