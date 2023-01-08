import React from "react";
import "./EventsMain.css";
import VirtualEvents from "../../images/Virutal Event.png";
import AnnualEvents from "../../images/Annual Event.png";
import DecemberToRemember from "../../images/December To Remember - Events - Rangawardhan VJTI.jpg";
import "./event.css";
import rangakatta from "./rangakatta.jpg";
import bhatkanti from "./bhatkanti.jpg";
import shubharambh from "./shubharambh.JPG";

const EventsMain = () => {
  return (
    <div className="wholeevent" style={{ color: "black", outline: "none" }}>
      <section>
        <div class="yearly_events">
        <div className="section-title" data-aos="zoom-in-up">
        <h3 className=" animate-charcter" style={{ marginTop: "5%" }}>
          Our  Events
        </h3>
      </div>
        </div>
        <section id="all_events">
          <section class="allevents">
            <div class="events">
              <div class="allevent_card">
                <div class="event_info">
                  <div class="event_info_img">
                    <img src={shubharambh} alt="" />
                  </div>
                  <div class="event_info_name">
                    <h4>शुभारंभ</h4>
                    <h5>
                      वर्षभर रंगवर्धन राबवत असणारे उपक्रम, त्याची माहिती
                      देण्यासाठी आणि रंगवर्धनची सर्वांना ओळख करून देण्यासाठी
                      आयोजित केला जाणारा सर्वात पहिला वहिला कार्यक्रम म्हणजे
                      Launch ! या कार्यक्रमाला मोठे पाहुणे आमंत्रित करून
                      त्यांच्या शुभहस्ते रंगवर्धनच्या प्रवासाला ते हिरवा कंदिल
                      देतात आणि या सोहळ्यात संपूर्ण पारंपारिक पोशाखात नटलेलं
                      VJTI !
                    </h5>
                  </div>
                </div>
              </div>
              <div class="allevent_card">
                <div class="event_info">
                  <div class="event_info_img">
                    <img src={rangakatta} alt="" />
                  </div>
                  <div class="event_info_name">
                    <h4>Game night</h4>
                    <h5>
                      प्रथम वर्षीय विद्यार्थ्यांसाठी रंगवर्धन 'रंगा'त हा खेळ
                      रंगला - Games Evening’ चा घाट घातला. एका पाठोपाठ एक खेळात
                      सगळे भाग घेत गेले व त्यातून विजेते निवडण्यात आले.
                      विजेत्यांना आकर्षक बक्षिसेही दिली गेली.
                    </h5>
                  </div>
                </div>
              </div>
              <div class="allevent_card">
                <div class="event_info">
                  <div class="event_info_img">
                    <img src={bhatkanti} alt="" />
                  </div>
                  <div class="event_info_name">
                    <h4>प्रश्नमंजुषा</h4>
                    <h5>
                      वर्षभर रंगवर्धन राबवत असणारे उपक्रम, त्याची माहिती
                      देण्यासाठी आणि रंगवर्धनची सर्वांना ओळख करून देण्यासाठी
                      आयोजित केला जाणारा सर्वात पहिला वहिला कार्यक्रम म्हणजे
                      Launch ! या कार्यक्रमाला मोठे पाहुणे आमंत्रित करून
                      त्यांच्या शुभहस्ते रंगवर्धनच्या प्रवासाला ते हिरवा कंदिल
                      देतात आणि या सोहळ्यात संपूर्ण पारंपारिक पोशाखात नटलेलं
                      VJTI !
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <div
        className="events_tab"
        style={{ color: "black", backgroundColor: "#000", outline: "none" }}
      ></div>
      <div className="section-title" data-aos="zoom-in-up">
        <h3 className=" animate-charcter" style={{ marginTop: "5%" }}>
          Our Past Events
        </h3>
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
