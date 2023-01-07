import React from 'react'
import Header from './Header/Header.jsx';
import WhatWeDo from './WhatWeDo/WhatWeDo.jsx'
import Sponsors from './Sponsors/Sponsors'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function App() {
  return (
   <>
 <Header />
 <WhatWeDo />
 <Sponsors />
 {/* <Webteam /> */}

   </>
  );
}

export default App;
