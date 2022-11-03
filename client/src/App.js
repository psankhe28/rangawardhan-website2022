import React from 'react'
import './App.css'
import"./js/script";
import Sponsors from './pages/Sponsor/Sponsor'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/home/Home'
import"./js/script";
import EventsMain from './pages/Events/EventsMain';
import DecemberToRemember from './pages/Events/DecemberToRemember';
import AnnualEvents from './pages/Events/AnnualEvents';
import VirtualEvents from './pages/Events/VirtualEvents'
import ContactUs from './pages/ContactUs/ContactUs';
import Page2 from './pages/About/Page2';

// import Ourteam from './pages/Team/OurTeam/OurTeam';
AOS.init();
function App() {
  return (
   <>
     <Router>
    <Routes>
        <Route exact path='/'  element={  <Home />} />
        <Route path='/about' element={<Page2 />} />
        {<Route path='/sponsors' element ={<Sponsors />} />}
        {/* {<Route path='/team' element ={<Ourteam />} />} */}
        {<Route path='/events' element ={<EventsMain />} />}
        <Route path="/decembertoremember" element={<DecemberToRemember /> } />
          <Route path="/annualevents" element={<AnnualEvents/>} />
          <Route path="/virtualevents" element={<VirtualEvents/>} />
          {<Route path='/contact' element ={<ContactUs /> } />}

    </Routes>
    </Router>
 
   </>
  );
}

export default App;
