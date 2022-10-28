import React from "react";
import './webteam.css'
import data from '../../../constants/data'


const Webteam = () => {
  return (
    <section className="team py-2 bg-red" id="team">
        <div className="container">
            <div className="section-title bg-dark" data-aos="zoom-in-up">
                <h2 className="text-upper text-white text-center">WebDev Team</h2>
            </div>
            <div className="team-content py-2 grid" data-aos="zoom-in-up">
                {
                    data.teams.map((teams, index)=>{
                 return(
                    <div className="team-item text-center text-white" key={index}>
                        <img src={teams.img} alt="team members image" className="mx-auto" ></img>
                        <p className="text-upper fw-7" >{teams.name}</p>
                        <span className="text-upper">{teams.Post}</span>
                    </div>
                 )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Webteam