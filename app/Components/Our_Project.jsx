import React from 'react'
import { project } from './db'
import Image from 'next/image'

const Our_Project = () => {
  return (
    <main>
        <div className='Our_Project_container'>
            <div className='Our_Project_wrapper'>
                <div className='Our_Project_title'>
                    <h2>Moving Cargo Across the Globe</h2>
                </div>
                <div className='Our_Project_content'>
                    {project.map((items, index) => (
                        <div key={index} className='Our_Project_items'>
                            <Image 
                            src={items.image ? items.image : "/depot_hero_1.jpg"} 
                            alt={items.title} 
                            width={300}
                            height={400}
                            />
                            {/* <div>
                                <h3>{items.title}</h3>
                                <p>{items.content}</p> 
                            </div> */}
                        </div>
                    ))}
                </div>
                <button className='Our_Project_btn'>More Work</button>

            </div>
        </div>
    </main>
    
  )
}

export default Our_Project