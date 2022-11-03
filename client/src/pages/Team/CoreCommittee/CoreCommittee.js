import React from "react";
import './CoreCommittee.css'
import data from './data'
import d from '../../../constants/data'


const CoreCommittee = () => {
  return (
    <section className="team py-2 bg-red" id="team">
        <div className="container">
            <div className="section-title bg-dark" data-aos="zoom-in-up">
                <h2 className="text-upper text-white text-center">Core Committee</h2>
            </div>
            <div className="team-content py-2 grid" data-aos="zoom-in-up">
                {
                    data.teams.map((teams, index)=>{
                 return(
                    <div className="team-item text-center text-white" key={index}>
                        <img src={teams.img} alt="team members image" className="mx-auto img" ></img>
                        <p className="text-upper fw-7" >{teams.name}</p>
                        <span className="text-upper">{teams.Post}</span>
                    </div>
                 )
                    })
                }
            </div>
        </div>

        {/* Sector Heads */}

        <div className="container">
            <div className="section-title bg-dark" data-aos="zoom-in-up">
                <h2 className="text-upper text-white text-center">Sector Heads</h2>
            </div>
            <div className="team-content py-2 grid" data-aos="zoom-in-up">
                {
                    data.sectorHeads.map((teams, index)=>{
                 return(
                    <div className="team-item text-center text-white" key={index}>
                        <img src={teams.img} alt="team members image" className="mx-auto img" ></img>
                        <p className="text-upper fw-7" >{teams.name}</p>
                        <span className="text-upper">{teams.Post}</span>
                    </div>
                 )
                    })
                }
            </div>
        </div>



        <div className="container">
            <div className="section-title bg-dark" data-aos="zoom-in-up">
            <h2 className="text-upper text-white text-center">WebDev Team</h2>
            </div>
            <div className="team-content py-2 grid" data-aos="zoom-in-up">
                {
                    d.teams.map((teams, index)=>{
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

export default CoreCommittee