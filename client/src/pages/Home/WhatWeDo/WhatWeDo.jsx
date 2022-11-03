import React from 'react'
// import { images } from "../../../constants/data";
import images from "../../../constants/images.js"
import data from "../../../constants/data"
import "./WhatWeDo.css"
import { Link } from "react-router-dom";
const WhatWeDo = () => {
  return (
   <section className='what-we-do py-6 ' id ="what-we-do">
   <div className='container'>
    <div className='section-title bg-dark'data-aos="zoom-in-up">
    <h3 className='text-upper text-white text-center'>About</h3>
       
        </div>
        <div className='what-we-do-content'>
         
               
                 <div className='what-we-do-item grid text-center' >
                    <div className='what-we-do-item-left' data-aos="zoom-in-up">
                    <img src ="https://0901.static.prezi.com/preview/v2/55zrjbkicakezlf5z6joqupbdp6jc3sachvcdoaizecfr3dnitcq_3_0.png"
                    alt = "hello" className='mx-auto image' />
                    </div>
                    <div className='what-we-do-item-right' data-aos="zoom-in-up">
                       <p className='text mx-auto'>
                       रंगवर्धन हे व्हीजेटीआय, मुंबईचे मराठी सांस्कृतिक रंगमंच आहे. हे एक मुक्त व्यासपीठ आहे जिथे फक्त मराठी राजभाषा व महाराष्ट्राची परंपरा टिकवले नाही जात तर मराठी संस्कृती टिकवणाऱ्यांच्या कलागुणांना वाव देखील दिला जातो . रंगवर्धन दर वर्षी नृत्याविष्कार, गाणे तराणे, कवडसा, युवा साहित्य संमेलन या सारख्या विविध स्पर्धा आयोजित करत असते .विद्यार्थ्यांना आपले कलाकुसर सादर करण्यासाठी रंगवर्धन हे एक उत्तम व्यासपीठ आहे.
                       </p>
                       <Link to ="/events" className='btn btn-red'>view more</Link>
                    </div>
                 </div>  
              
        </div>
        </div>
   </section>
  )
}

export default WhatWeDo