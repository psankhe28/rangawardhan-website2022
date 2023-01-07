import { React } from "react";
import images from "../../../constants/images.js"
import "./Header.css";


const Header = () => {
  return (
    <>
    <header className="header flex" id="header">
    <div className="container" >
    <img src={images.ranga} alt="ranga" className="ranga-img vert-move" />
        <div className="header-content grid text-center py-2 text-white" >
            <div className="header-content-left" data-aos = "fade-right"  data-aos-duration="3000">
            <h1 className="text-upper header-title">
            
            </h1>
            
            </div>
            <div className="header-content-right" data-aos ="fade-left">
            </div>
        </div>
    </div>
    </header>
    </>
  )
}

export default Header