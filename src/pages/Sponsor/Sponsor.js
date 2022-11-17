import React from 'react'
import d from './data.js'
import data from '../../constants/data'

const Sponsor = () => {
  return (
    <>
<section className ='sponsors py-2' id='sponsors'>
    <div className='container'>
        <div className='section-title' data-aos="zoom-in-up" data-aos-duration="3000">
            <h2 className='past ' >Our Sponsors</h2> 
        </div>
        <div className='sponsors-content grid py-6' >
            {
              data.sponsor.map((spons,index)=>{
            return (
                <div className='sponsors-item text-center' key={index}>
                    <img src = {spons.img} alt="spons images" className='mx-auto' data-aos="zoom-in-up" data-aos-duration="3000"></img>
                    {/* <h4 className='text-upper'>{spons.title}</h4> */}

                </div>
            )
              })  
            }
        </div>
    </div>
    <div className='container'>
        <div className='section-title' data-aos="zoom-in-up" data-aos-duration="3000">
            <h2 className='past' >Our Past Sponsors</h2> 
        </div>
        <div className='sponsors-content grid py-6' >
            {
              d.sponsor.map((spons,index)=>{
            return (
                <div className='sponsors-item text-center' key={index}>
                    <img src = {spons.img} alt="spons images" className='mx-auto' data-aos="zoom-in-up" data-aos-duration="3000"></img>
                    {/* <h4 className='text-upper'>{spons.title}</h4> */}

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

export default Sponsor;