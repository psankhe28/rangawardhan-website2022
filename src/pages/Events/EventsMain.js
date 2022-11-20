import React from "react";
import "./EventsMain.css";
import VirtualEvents from "../../images/Virutal Event.png";
import AnnualEvents from "../../images/Annual Event.png";
import DecemberToRemember from "../../images/December To Remember - Events - Rangawardhan VJTI.jpg";

const EventsMain = () => {
  return (
    <div
      className="wholeevent"
      style={{ color: "black", backgroundColor: "#000", outline: "none" }}
    >
      <div
        className="events_tab"
        style={{ color: "black", backgroundColor: "#000", outline: "none" }}
      >
      </div>
      <div className="section-title" data-aos="zoom-in-up">
        <h3 className=" animate-charcter" style={{marginTop:'5%'}}>Our Past Events</h3>
      </div>
      <div className="events-container">
        <div class="wrapper">
          <div class="card">
            <a href="/decembertoremember">
              <img src={DecemberToRemember} alt="" />
              <div class="info">
                <h1 className="info-t">December to Remember</h1>
              </div>
            </a>
          </div>
          <div class="card">
            <a href="/annualevents">
              <img src={AnnualEvents} alt="" />
              <div class="info">
                <h1 className="info-t">Annual Events</h1>
              </div>
            </a>
          </div>
          <div class="card">
            <a href="/virtualevents">
              <img src={VirtualEvents} alt="" />
              <div class="info">
                <h1 className="info-t">Virtual Events</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsMain;
