import { React } from "react";
import "./Header.css";
import MyVideo from "./smoke.mp4"

const Header = () => {
  return (
    <>
       <section className="animationforheader">
       <video className="videoheader" autoPlay muted >
 <source src={MyVideo} type="video/mp4" />
</video>
       <h1 className="parts">
            <span className="past">रं</span>
            <span className="past">ग</span>
            <span className="past">व</span>
            <span className="past">र्ध</span>
            <span className="past">न</span>
            <span className="past">'</span>
            <span className="past"> </span>
            <span className="past">२</span>
            <span className="past">३</span>
            <span className="past">-</span>
            <span className="past">२</span>
            <span className="past">४</span>
           
            <div className="animate-charcter" style = {{marginTop: "2%"}}>भव्य  शुभारंभ सोहळा  </div>
            <div className="animate-charcter">११ सप्टेंबर</div>
        </h1> 
    </section>
    </>
  )
}

export default Header
