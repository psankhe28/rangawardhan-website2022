import React from "react";
import "./ourteam.css";
import data from "./data";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Ourteam = () => {
  return (
    <section className="team py-2 bg-red" id="team">
      <div className="container">
        <div className="section-title bg-dark" data-aos="zoom-in-up">
          <h2 className="text-upper text-white text-center">Our Team</h2>
        </div>
        <div className="team-content py-2 grid" data-aos="zoom-in-up">
          {data.teams.map((teams, index) => {
            return (
              <div className="team-item text-center text-white" key={index}>
                <img
                  src={teams.img}
                  alt="team members image"
                  className="mx-auto img"
                ></img>
                <p className="text-upper fw-7">{teams.name}</p>
                <span className="text-upper">{teams.Post}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Link to="/corecommittee">
        <div className="center">
          <button className="custom-btn btn-5">Core Committee</button>
        </div>
      </Link>

      <div className="container">
        <div className="section-title bg-dark" data-aos="zoom-in-up">
          <h2 className="text-upper text-white text-center">Previous Team</h2>
        </div>
        <div className="team-content py-2 grid" data-aos="zoom-in-up">
          {data.pastTeam.map((teams, index) => {
            return (
              <div className="team-item text-center text-white" key={index}>
                <img
                  src={teams.img}
                  alt="team members image"
                  className="mx-auto img"
                ></img>
                <p className="text-upper fw-7">{teams.name}</p>
                <span className="text-upper">{teams.Post}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
