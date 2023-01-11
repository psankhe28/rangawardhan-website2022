import React,{useState} from "react"
import "./Navbar.css";
import {FaBars,FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";
import images from "../../constants/images"

const Navbar = () => {
    const  [click,setClick] = useState(false);
    const handleClick = ()=> setClick(!click)
    const close = ()=>setClick(false);
  return (
    <nav className="Navbar">
        <div className="container flex navbar-content ">
            <div className="brand-and-toggler flex">
             <Link to="/" alt =""  className="navbar-brand text-upper fw-7 fs-22 flex " data-aos = "fade-right"  data-aos-duration="3000">
             <img src= {images.Rangwardhan_logo} alt="ranga" className="ranga-logo" 
              />
                <h3 className="text-white navhead" style={{fontFamily:"Gotu"}}>रंग</h3>
                <h3 style={{color:"#ffae42",fontFamily:"Gotu"}} className="navhead">वर्धन</h3>
             </Link>
             <button type="button"
             className="navbar-show-btn text-white" onClick={()=>handleClick()}  >
                <FaBars size={26} />
             </button>
            </div>
<div className={`navbar-collapse flex flex-center ${click ? "show-navbar" :" "}`}
>
    <button type ="button" className="navbar-hide-btn text-white" onClick={()=>close()}>
        <FaTimes size ={32} />
    </button>
    <ul className="navbar-nav text-upper text-white fw-6 ls-1 fs-2- text-center"  >
    <li className="nav-item">
     <img src={images.Rangwardhan_logo} className="navbar-image vert-move" alt='' />
       </li>
       <li className="nav-item">
        <Link  to="/" className="nav-link" onClick={()=>close()}>Home</Link>
       </li>
       <li className="nav-item">
        <Link  to="/about" className="nav-link" onClick={()=>close()}>About</Link>
       </li>
       <li className="nav-item">
        <Link  to="/events" className="nav-link" onClick={()=>close()}>Events</Link>
       </li>
       <li className="nav-item">
        <Link  to="/team" className="nav-link" onClick={()=>close()}>Team</Link>
       </li>
       <li className="nav-item">
        <Link  to="/gallery" className="nav-link" onClick={()=>close()}>Gallery</Link>
       </li>
       <li className="nav-item">
        <Link  to="/sponsors"className="nav-link" onClick={()=>close()}>Sponsors</Link>
       </li>
       <li className="nav-item">
        <Link to="/natyavardhan" className="nav-link" onClick={()=>close()}>Natyavardhan</Link>
       </li>
       <li className="nav-item">
        <Link to="/contact" className="nav-link" onClick={()=>close()}>Contact Us</Link>
       </li>
    </ul>
</div>
        </div>
    </nav>
  )
}

export default Navbar