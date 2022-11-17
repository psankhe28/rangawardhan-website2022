import React from 'react'
import data from '../../../constants/data'
import './Sponsors.css'
const Sponsors = () => {
  return (
    <>
<section className ='sponsors' id='sponsors'>
    <div className='container'>
        <div className='section-title'data-aos="zoom-in-up" data-aos-duration="3000">
            <h1 className='animate-charcter sponshead' >Sponsors</h1> 
        </div>
        <div className='sponsors-content grid py-6' >
            {
              data.sponsor.map((spons,index)=>{
            return (
                <div className='sponsors-item text-center' key={index}>
                    <img src = {spons.img} alt="spons images" className='mx-auto' data-aos="zoom-in-up" data-aos-duration="3000"></img>
                    {/* <h4 className='text-upper' data-aos="zoom-in" data-aos-duration="3000">{spons.title}</h4> */}
                </div>
            )
              })  
            }
        </div>
    </div>
</section>
</>
  )
}

export default Sponsors