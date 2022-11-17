import React from "react";
import "./ourteam.css";
import data from "./data";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

import {Link } from "react-router-dom";
import Webteam from "../../home/WebTeam/Webteam";


const Ourteam = () => {
  return (
    <div style={{backgroundImage:'linear-gradient(270deg, #28b8d5 0%,#020344 100%)'}}>
      <div className="container" style={{marginTop:'20px',backgroundImage:'linear-gradient(270deg, #28b8d5 0%,#020344 100%)'}}>
        <div className="section-title" data-aos="zoom-in-up" style={{borderRadius:'10px'}}>
          <h2 className="past" >Our Team</h2>
        </div>
        <div className="team-content py-2 grid" data-aos="zoom-in-up">
          {data.teams.map((teams, index) => {
            return (
              <div className="team-card" key={index}>
              <div className="team-box">
                <img
                  src={teams.img}
                  alt="team members"
                  className="mx-auto img"
                ></img>
                <div className="team-info">
                  <div className="team-social-links">
                    <a href={teams.m}><FaEnvelope/></a>
                    <a href={teams.i}><FaInstagram/></a>
                    <a href={teams.l}><FaLinkedin/></a>
                  </div>
                </div>
              </div>
              <div className="name" >{teams.name}</div>
              <div className="post" >{teams.Post}</div>
            </div>
            );
          })}
        </div>
      </div>
<br/>
      <Link to="/corecommittee">
        <div className="center">
          <button className="custom-btn btn-5">Core Committee</button>
        </div>
      </Link>
      <br/>
      <div className="container">
        <div className="section-title" data-aos="zoom-in-up" style={{borderRadius:'10px'}}>
          <h2 className="past">Previous Team</h2>
        </div>
        <div className="team-content py-2 grid" data-aos="zoom-in-up">
          {data.pastTeam.map((teams, index) => {
            return (
              <div className="team-card" key={index}>
              <div className="team-box">
                <img
                  src={teams.img}
                  alt="team members"
                  className="mx-auto img"
                ></img>
              </div>
              <div className="name" >{teams.name}</div>
              <div className="post" >{teams.Post}</div>
            </div>
            
            );
          })}
        </div>
      </div>
         <div className="container">
        <div className="section-title" data-aos="zoom-in-up" style={{borderRadius:'10px'}}>
          <h2 className="past">Our Mentors</h2>
        </div>
        <div className="team-content py-2 grid" data-aos="zoom-in-up">
          {data.mentor.map((teams, index) => {
            return (
              <div className="team-card" key={index}>
              <div className="team-box">
                <img
                  src={teams.img}
                  alt="team members"
                  className="mx-auto img"
                ></img>
                <div className="team-info">
                  <div className="team-social-links">
                    <a href={teams.mail}><FaEnvelope/></a>
                  </div>
                </div>
              </div>
              <div className="name" >{teams.name}</div>
              <div className="post" >{teams.Post}</div>
            </div>
            
            );
          })}
        </div>
      </div>
      <Webteam />
      </div>
  );
};

export default Ourteam;
