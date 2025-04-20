import React from 'react'
import  services  from './db'


// // Check if services is not undefined and has at least one element
// if (!services || typeof services[0].title === "undefined") {
//   console.log("services not found in db.js");
// } else {
//   console.log("services found in db.js");
//   // Render your component with services data here
//   console.log(services[0].title);
// }

const  service = services.slice(0, 4)

const What_We_Do = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='what_we_do'>
          <p className='hightLight'>What We Do</p>
          <p className='hightLight_subtitle'>Reliable Cargo Services with Safety Guaranteed</p>
        </div>
        <div>
          <div className='grid_container'>
            {service && service.length > 0 ? (
              service.map((items, index) => (
                <div key={index} className='what_we_do_content'>
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

export default What_We_Do;

