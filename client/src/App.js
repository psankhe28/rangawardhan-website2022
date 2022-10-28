import React from 'react'
import './App.css'
import Header from './pages/Home/Header/Header.jsx';
import"./js/script";
import WhatWeDo from './pages/Home/WhatWeDo/WhatWeDo.jsx'
import Sponsors from './pages/Home/Sponsors/Sponsors'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
// import Footer1 from './components/Footer/Footer1'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Webteam from './pages/Home/WebTeam/Webteam';
AOS.init();
function App() {
  return (
   <>
    <Router>
 <Header />
 <WhatWeDo />
 <Sponsors />
 <Webteam />
 {/* <Footer1 /> */}
 </Router>
   </>
  );
}

export default App;
