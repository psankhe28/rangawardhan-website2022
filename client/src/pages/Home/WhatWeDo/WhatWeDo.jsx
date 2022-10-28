import React from 'react'
import { images } from "../../../constants/data";
import data from "../../../constants/data"
import "./WhatWeDo.css"
import { Link } from "react-router-dom";
const WhatWeDo = () => {
  return (
   <section className='what-we-do py-6 ' id ="what-we-do">
   <div className='container'>
    <div className='section-title bg-dark'data-aos="zoom-in-up">
    <h3 className='text-upper text-white text-center'>Events</h3>
        <h2 className='text-upper text-white text-center'>what we do</h2>
        </div>
        <div className='what-we-do-content'>
            {
                data.ranga_info.map((whatItem,index)=>{
                    return (
                 <div className='what-we-do-item grid text-center' key = {index}>
                    <div className='what-we-do-item-left' data-aos="zoom-in-up">
                    <img src = {whatItem.image}
                    alt = "" className='mx-auto' />
                    </div>
                    <div className='what-we-do-item-right' data-aos="zoom-in-up">
                       <h4 className='twxt-upper fs-20' >
                        {whatItem.title}
                       </h4>
                       <p className='text mx-auto'>
                        {whatItem.paragraph}
                       </p>
                       <Link to ="/events" className='btn btn-red'>view more</Link>
                    </div>
                 </div>  
                )
                })
            }
        </div>
        </div>
   </section>
  )
}

export default WhatWeDo