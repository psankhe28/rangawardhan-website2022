import React from 'react'
import data from '../../../constants/data'
import './Sponsors.css'
const Sponsors = () => {
  return (
<section className ='sponsors py-2' id='sponsors'>
    <div className='container'>
        <div className='section-title bg-dark'data-aos="zoom-in-up" data-aos-duration="3000">
            <h1 className='text-upper text-white text-center past' >Sponsors</h1> 
        </div>
        <div className='sponsors-content grid py-6' >
            {
              data.sponsor.map((spons,index)=>{
            return (
                <div className='sponsors-item text-center' key={index}>
                    <img src = {spons.img} alt="spons images" className='mx-auto' data-aos="zoom-in-up" data-aos-duration="3000"></img>
                    <h4 className='text-upper'>{spons.title}</h4>
                </div>
            )
              })  
            }
        </div>
    </div>
</section>
  )
}

export default Sponsors