import React,{useState} from "react"
import images from "../../../constants/images.js"
import "./Navbar.css";
import {FaBars,FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
    const  [click,setClick] = useState(false);
    const handleClick = ()=> setClick(!click)
    const close = ()=>setClick(false);
  return (
    <nav className="Navbar">
        <div className="container flex navbar-content">
            <div className="brand-and-toggler flex">
             <Link to="/" alt =""  className="navbar-brand text-upper fw-7 fs-22 flex " data-aos = "fade-right">
                <span className="text-white">Ranga</span>
                <span>wardhan</span>
             </Link>
             <button type="button"
             className="navbar-show-btn text-white" onClick={()=>handleClick()} >
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
        <Link  to="/home" className="nav-link">home</Link>
       </li>
       <li className="nav-item">
        <Link  to="/about" className="nav-link">about</Link>
       </li>
       <li className="nav-item">
        <Link  to="/events" className="nav-link">Events</Link>
       </li>
       <li className="nav-item">
        <Link  to="/fame" className="nav-link">Hall of Fame</Link>
       </li>
       <li className="nav-item">
        <Link  to="/gallery" className="nav-link">Gallery</Link>
       </li>
       <li className="nav-item">
        <Link  to="/sponsors"className="nav-link">Sponsors</Link>
       </li>
       <li className="nav-item">
        <Link to="/natyavardhan" className="nav-link">Natyavardhan</Link>
       </li>
       <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact Us</Link>
       </li>
    </ul>
</div>
        </div>
    </nav>
  )
}

export default Navbar