import React from "react";
import "./EventsMain.css";

const EventsMain = () => {
  return (
    <div>
      <div className="events_tab">
        <h1 style={{color:'black'}} className="events_tab">रंगवर्धन: आवाज मराठी मनाचा !</h1>
      </div>
      <div className='section-title bg-dark'data-aos="zoom-in-up">
            <h2 className='text-upper text-white text-center past' >Our Past Events</h2> 
        </div>
      <div className="events-container">
        <div class="wrapper">
          <div class="card">
            <a href="/decembertoremember">
              <img
                src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                alt=""
              />
              <div class="info">
                <h1 className="info-t">December to Remember</h1>
              </div>
            </a>
          </div>
          <div class="card">
            <a href="/annualevents">
              <img
                src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                alt=""
              />
              <div class="info">
                <h1>Annual Events</h1>
              </div>
            </a>
          </div>
          <div class="card">
            <a href="/virtualevents">
              <img
                src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                alt=""
              />
              <div class="info">
                <h1 className="events-title">Virtual Events</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsMain;
